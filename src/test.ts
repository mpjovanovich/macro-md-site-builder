import { execSync } from "child_process";
import fs from "fs";
import { parseFile, parseString } from "macro-md";
import prettier from "prettier";

/*
 * TODO:
 * - Loop through directory structure in content folder and parse.
 * - Code highlight probably will need library adjustment.
 * */

function getGitRootDir(): string {
  return execSync("git rev-parse --show-toplevel").toString().trim();
}
const gitRootDir = getGitRootDir();
const macroPath = `${gitRootDir}/src/testMacro.js`;
const markdownPath = `${gitRootDir}/content/test.md`;
const outputPath = `${gitRootDir}/output/index.html`;
const outputDir = outputPath.substring(0, outputPath.lastIndexOf("/"));
const prettierOptions = {
  parser: "html",
  printWidth: 80,
  tabWidth: 2,
};

let markdown = fs.readFileSync(markdownPath, "utf-8");
let { frontmatter, content } = extractFrontmatter(markdown);
let html = await parseString(content, macroPath, { useGitHubStyleIds: true });
html = getSiteHtml(html, frontmatter);
html = await prettier.format(html, prettierOptions);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
fs.writeFileSync(outputPath, html);

// Sanity check
// console.log(markdown.substring(0, 100));

type Frontmatter = { [key: string]: string };

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

function getSiteHtml(html: string, frontmatter?: Frontmatter): string {
  let title = "Notes";
  if (frontmatter?.course) {
    title = frontmatter.course;
  }
  if (frontmatter?.title) {
    title += " - " + frontmatter.title;
  }

  html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" >
        <title>${title}</title>
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/images/favicon-32x32.png"
        >
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets/images/favicon-16x16.png"
        >
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;1,400;1,700&display=swap"
            rel="stylesheet"
        >
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,400;1,700&display=swap"
            rel="stylesheet"
        >
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/highlight.css">
    </head>
    <body>
        ${html}
    </body>
`;
  return html;
}
