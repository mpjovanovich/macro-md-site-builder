import { execSync } from "child_process";
import fs, { outputFile } from "fs-extra";
import { parseFile, parseString } from "macro-md";
import path, { resolve } from "path";

type Frontmatter = { [key: string]: string };

const gitRootDir = getGitRootDir();
const macroFilePath = `${gitRootDir}/src/macros.js`;
const markdownFilePath = `${gitRootDir}/test_output/test.md`;
const outputFilePath = `${gitRootDir}/test_output/test.html`;

// const markdown = `
// - Font hosting services store saved copies of fonts for download.
// - Fonts may be cached already from other website visits (e.g. Roboto), saving another download.
//   - E.g.: [https://fonts.google.com/](https://fonts.google.com/)
//     - \`\`\` html
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
//         rel="stylesheet"
//       />
//       \`\`\`
//     - First two \`preconnect\` lines are not necessary, but help optimize delivery from google.
// `;
// compileMarkdownStringToHtml(markdown);

compileMarkdownToHtml(markdownFilePath, outputFilePath);

/*
 * TEST HARNESS FUNCTIONS
 */

async function compileMarkdownStringToHtml(markdown: string): Promise<void> {
  let html = await parseString(markdown, macroFilePath, {
    macroDelimiter: "~~",
    useGitHubStyleIds: true,
    useHighlightJS: true,
  });
  console.log(html);
}

async function compileMarkdownToHtml(
  markdownFilePath: string,
  outputFilePath: string
): Promise<void> {
  let markdown = await fs.readFile(markdownFilePath, "utf-8");
  let { frontmatter, content } = extractFrontmatter(markdown);
  let html = await parseString(content, macroFilePath, {
    macroDelimiter: "~~",
    useGitHubStyleIds: true,
    useHighlightJS: true,
  });
  //   html = getSiteHtml(html, frontmatter);
  //   html = await prettier.format(html, prettierOptions);
  //   await fs.writeFile(outputFilePath, html);
}

/*
 * HELPER FUNCTIONS
 */

function extractFrontmatter(markdown: string): {
  frontmatter: Frontmatter;
  content: string;
} {
  const frontmatter: Frontmatter = {};
  let content = markdown;

  const frontmatterRegex = /^---\s*[\s\S]+?---/;
  const match = markdown.match(frontmatterRegex);
  if (match) {
    // Extract the content of the frontmatter, excluding the delimiters
    const frontmatterContent = match[0].replace(/---/g, "").trim();

    // Split the content into lines and then into key-value pairs
    frontmatterContent.split("\n").forEach((line) => {
      const [key, value] = line.split(":").map((part) => part.trim());
      if (key && value) {
        frontmatter[key] = value;
      }
    });

    // Remove the frontmatter from the content
    content = markdown.replace(frontmatterRegex, "").trim();
  }

  return { frontmatter, content };
}

function getGitRootDir(): string {
  return execSync("git rev-parse --show-toplevel").toString().trim();
}
