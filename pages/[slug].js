import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../components/common/Meta";
import Post from "../components/blog/Post";
import { getPostBySlug, getAllPosts } from "../utils/blogUtils";

const PostPage = ({ post, locale }) => (
  <>
    <Meta title={`${post.title} | MPGCode`} description={post.excerpt} />
    <Post post={post} locale={locale} />
  </>
);

export default PostPage;

/** Queries all the available posts and exports an array of slugs to pre-generate
 * all the individual blog posts pages at build time.
 * 1 - getStaticPaths -> recovers all slugs
 * 2 - getStaticProps -> for each of the recovered slugs
 */
export const getStaticPaths = async ({ locales }) => {
  const posts = getAllPosts({ locales, fields: ["slug"] });
  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
      locale: post.locale,
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const post = getPostBySlug({
    slug,
    locale,
    fields: [
      "slug",
      "content",
      "title",
      "excerpt",
      "date",
      "coverImage",
      "coverImageAlt",
      "coverImageHeight",
      "coverImageWidth",
      "isDraft",
    ],
  });

  if (!post) {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }

  return {
    props: {
      post,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
