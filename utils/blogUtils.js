import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { isLiveEnv } from "./helpers";
import { isFuture } from "./dateUtils";
const postsDirectory = join(process.cwd(), "posts");
import matter from "gray-matter";

export const getAllPosts = ({
  locales = [],
  fields = ["slug", "localizedSlug"],
  locale = "en",
}) => {
  return getPostSlugs({ locales, locale })
    .map(({ slug, locale }) => getPostBySlug({ slug, locale, fields }))
    .sort((post1, post2) => (post1?.date > post2?.date ? "-1" : "1"));
};

export const getPostSlugs = ({ locales = [], locale }) => {
  let slugs = [];

  if (locales.length > 0) {
    locales.forEach((locale) => {
      const localizedDirectory = join(postsDirectory, locale);
      const localizedPosts = readdirSync(localizedDirectory).map((slug) => {
        return { slug, locale };
      });

      slugs = [...slugs, ...localizedPosts];
    });
  } else {
    const localizedDirectory = join(postsDirectory, locale);
    const localizedPosts = readdirSync(localizedDirectory).map((slug) => {
      return { slug, locale };
    });

    slugs = [...slugs, ...localizedPosts];
  }

  return slugs;
};

export const getPostBySlug = ({ slug, locale, fields = [] }) => {
  const fullPath = join(postsDirectory, locale, slug, `${slug}.mdx`);
  let fileContents;

  try {
    fileContents = readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const items = {};
    fields.forEach((field) => {
      items["locale"] = locale;
      if (field === "slug") items[field] = slug;
      if (field === "content") items[field] = content;
      if (data[field]) items[field] = data[field];
    });

    const visibleFrom = new Date(items.date);
    // Post remains unpublished when is draft or when date is in the future
    const isUnpublished =
      (isLiveEnv && items.isDraft) || (isLiveEnv && isFuture(visibleFrom));

    if (isUnpublished) return null;

    return items;
  } catch (err) {
    return null;
  }
};
