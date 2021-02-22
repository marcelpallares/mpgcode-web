import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export const getPostSlugs = fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug, fields = []) => {
  const fullPath = join(postsDirectory, slug, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};
  fields.forEach((field) => {
    if (field === "slug") items[field] = slug;
    if (field === "content") items[field] = content;
    if (data[field]) items[field] = data[field];
  });

  return items;
};

export const getAllPosts = (fields = []) => {
  return getPostSlugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
};
