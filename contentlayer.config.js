import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  path: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Logger = defineDocumentType(() => ({
  name: "Logger",
  filePathPattern: "./loggers/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
    published: {
      type: "boolean",
    },
  },
  computedFields,
}));

export const Progress = defineDocumentType(() => ({
  name: "Progress",
  filePathPattern: "./progresses/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    gambar: {
      type: "string",
    },
    date: {
      type: "date",
    },
    url: {
      type: "string",
    },
    published: {
      type: "boolean",
    },
    documentation: {
      type: "string",
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "./projects/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    gambar: {
      type: "string",
    },
    date: {
      type: "date",
    },
    reference1: {
      type: "string",
    },
    reference2: {
      type: "string",
    },
    published: {
      type: "boolean",
    },
    partner: {
      type: "string",
    },
  },
  computedFields,
}));

export const Story = defineDocumentType(() => ({
  name: "Story",
  filePathPattern: "./stories/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
    url: {
      type: "string",
    },
    published: {
      type: "boolean",
    },
    repository: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Logger, Progress, Project, Story],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
