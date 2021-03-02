import BlogPost from "../components/BlogPost";
import { getPostBySlug, getAllPosts } from "../utils/blogUtils";

const PostPage = ({ post, locale }) => <BlogPost post={post} locale={locale} />;

export default PostPage;

/** Queries all the available posts and exports an array of slugs to pre-generate
 * all the individual blog posts pages at build time.
 * 1 - getStaticPaths -> recovers all slugs
 * 2 - getStaticProps -> for each of the recovered slugs
 * It gets rebuilt after 1 second each time someone visits a blog post.
 */
export const getStaticPaths = async ({ locales }) => {
  const posts = getAllPosts(locales, ["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const post = getPostBySlug(locale, slug, [
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
  ]);

  if (!post) {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }

  return {
    props: { post, locale },
    revalidate: 1, // In seconds
  };
};
