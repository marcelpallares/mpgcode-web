import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export const getPostSlugs = (locales = []) => {
  let slugs = [];

  locales.forEach((locale) => {
    const localizedDirectory = join(postsDirectory, locale);
    const localizedPosts = fs.readdirSync(localizedDirectory).map((slug) => {
      return { slug, locale };
    });

    slugs = [...slugs, ...localizedPosts];
  });

  return slugs;
};

export const getAllPosts = (locales = [], fields = []) => {
  return getPostSlugs(locales)
    .map(({ slug, locale }) => getPostBySlug(locale, slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
};

export const getPostBySlug = (locale, slug, fields = []) => {
  const fullPath = join(postsDirectory, locale, slug, `${slug}.mdx`);
  let fileContents;

  try {
    fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const items = {};
    fields.forEach((field) => {
      if (field === "slug") items[field] = slug;
      if (field === "content") items[field] = content;
      if (data[field]) items[field] = data[field];
    });

    return items;
  } catch (err) {
    return null;
  }
};
