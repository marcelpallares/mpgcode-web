import MDX from "@mdx-js/runtime";
import ExternalLink from "./ExternalLink";
import PostEmphasis from "./PostEmphasis";
import PostImage from "./PostImage";
import { isLiveEnv } from "../utils/helpers";
import { isFuture } from "../utils/dateUtils";

const BlogPost = ({ post: { title, slug, content, isDraft, date } }) => {
  const visibleFrom = new Date(date);

  // Post remains unpublished when is draft or when date is in the future
  const isUnpublished =
    (isLiveEnv && isDraft) || (isLiveEnv && isFuture(visibleFrom));

  const components = {
    img: (props) => <PostImage slug={slug} {...props} />,
    em: (props) => <PostEmphasis {...props} />,
    a: (props) => <ExternalLink {...props} />,
  };

  return (
    <>
      {isUnpublished ? (
        <p>This post has not yet been published. Please try again later.</p>
      ) : (
        <MDX components={components}>{content}</MDX>
      )}
    </>
  );
};

export default BlogPost;
