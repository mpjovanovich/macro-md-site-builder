import { execSync } from "child_process";
// import fs from "fs/promises";
import fs from "fs-extra";
import { parseFile, parseString } from "macro-md";
import { html } from "parse5";
import path, { resolve } from "path";
import prettier from "prettier";

/*
 * TODO:
 * - Code highlight probably will need library adjustment.
 * */

type Frontmatter = { [key: string]: string };

async function compileMarkdownToHtml(
  markdownFilePath: string,
  outputFilePath: string
): Promise<void> {
  let markdown = await fs.readFile(markdownFilePath, "utf-8");
  let { frontmatter, content } = extractFrontmatter(markdown);
  let html = await parseString(content, macroFilePath, {
    useGitHubStyleIds: true,
  });
  html = getSiteHtml(html, frontmatter);
  html = await prettier.format(html, prettierOptions);
  await fs.writeFile(outputFilePath, html);
}

function getGitRootDir(): string {
  return execSync("git rev-parse --show-toplevel").toString().trim();
}

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
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/css/highlight.css">
    </head>
    <body>
        ${html}
    </body>
`;
  return html;
}

async function processDirectory(markdownDirectory: string): Promise<void> {
  const entries = await fs.readdir(markdownDirectory, { withFileTypes: true });
  for (const entry of entries) {
    const markdownFilePath = path.join(markdownDirectory, entry.name);

    if (entry.isDirectory()) {
      console.log(`Processing directory: ${markdownFilePath}`);

      // Create the corresponding directory in the output folder
      const outputDirectoryPath = markdownFilePath
        .replace("/content/", "/output/")
        .replace(/\/$/, "");
      await fs.mkdir(outputDirectoryPath, { recursive: true });

      // Recursively process the directory
      await processDirectory(markdownFilePath);
    } else if (entry.isFile()) {
      console.log(`Processing file: ${markdownFilePath}`);

      // Replace the .md file extension with .html
      const htmlFileName = entry.name.replace(/\.md$/, ".html");
      const htmlFilePath = path
        .join(entry.parentPath, htmlFileName)
        .replace("/content/", "/output/");

      // Process the markdown file
      await compileMarkdownToHtml(markdownFilePath, htmlFilePath);
    }
  }
}

const gitRootDir = getGitRootDir();
const macroFilePath = `${gitRootDir}/src/macros.js`;
const markdownDirectoryPath = `${gitRootDir}/content/`;
const htmlDirectoryPath = `${gitRootDir}/output/`;
const prettierOptions = {
  parser: "html",
  printWidth: 80,
  tabWidth: 2,
};

// If the directory exists, delete it. Make a new one.
if (await fs.pathExists(htmlDirectoryPath)) {
  await fs.rm(htmlDirectoryPath, { recursive: true });
}
await fs.mkdir(htmlDirectoryPath, { recursive: true });

// Loop through files in the markdown directory recursively
await processDirectory(markdownDirectoryPath);
