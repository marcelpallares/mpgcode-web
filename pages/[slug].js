import BlogPost from "../components/BlogPost";
import { getPostBySlug, getAllPosts } from "../utils/blogUtils";

const PostPage = ({ post }) => <BlogPost post={post} />;

export default PostPage;

/** Queries all the available posts and exports an array of slugs to pre-generate
 * all the individual blog posts pages at build time.
 * 1 - getStaticPaths -> recovers all slugs
 * 2 - getStaticProps -> for each of the recovered slugs
 * It gets rebuilt after 1 second each time someone visits a blog post.
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = getPostBySlug(slug, [
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

  return {
    props: { post },
    revalidate: 1, // In seconds
  };
};
