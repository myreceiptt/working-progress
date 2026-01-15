import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type BaseFrontmatter = {
  title: string;
  description: string;
  date?: string;
  published?: boolean;
  gambar?: string;
};

export type Logger = BaseFrontmatter & {
  slug: string;
  path: string;
  body: string;
};

export type Progress = BaseFrontmatter & {
  slug: string;
  path: string;
  url?: string;
  documentation?: string;
  body: string;
};

export type Project = BaseFrontmatter & {
  slug: string;
  path: string;
  reference1?: string;
  reference2?: string;
  partner?: string;
  body: string;
};

export type Story = BaseFrontmatter & {
  slug: string;
  path: string;
  url?: string;
  repository?: string;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

async function getMdxFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getMdxFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(entryPath);
    }
  }

  return files;
}

function toSlug(section: string, filePath: string) {
  const relative = path
    .relative(path.join(contentRoot, section), filePath)
    .replace(/\\/g, "/");
  const slug = relative.replace(/\.mdx$/, "");
  return slug;
}

function toPath(section: string, slug: string) {
  return `/${section}/${slug}`;
}

async function readDocument<T extends BaseFrontmatter>(
  section: string,
  filePath: string
): Promise<T & { slug: string; path: string; body: string }> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = toSlug(section, filePath);

  return {
    ...(data as T),
    slug,
    path: toPath(section, slug),
    body: content,
  };
}

async function getAllDocuments<T extends BaseFrontmatter>(section: string) {
  const files = await getMdxFiles(path.join(contentRoot, section));
  const docs = await Promise.all(
    files.map((filePath) => readDocument<T>(section, filePath))
  );

  return docs.sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getAllLoggers() {
  return getAllDocuments<Logger>("loggers");
}

export async function getAllProgresses() {
  return getAllDocuments<Progress>("progresses");
}

export async function getAllProjects() {
  return getAllDocuments<Project>("projects");
}

export async function getAllStories() {
  return getAllDocuments<Story>("stories");
}

async function getDocumentBySlug<T extends BaseFrontmatter>(
  section: string,
  slug: string
) {
  const filePath = path.join(contentRoot, section, `${slug}.mdx`);
  try {
    return await readDocument<T>(section, filePath);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

export async function getLoggerBySlug(slug: string) {
  return getDocumentBySlug<Logger>("loggers", slug);
}

export async function getProgressBySlug(slug: string) {
  return getDocumentBySlug<Progress>("progresses", slug);
}

export async function getProjectBySlug(slug: string) {
  return getDocumentBySlug<Project>("projects", slug);
}

export async function getStoryBySlug(slug: string) {
  return getDocumentBySlug<Story>("stories", slug);
}
