import MDX from "@mdx-js/runtime";
import PostLink from "./PostLink";
import PostEmphasis from "./PostEmphasis";
import PostImage from "./PostImage";
import { isLiveEnv } from "../../utils/helpers";
import { isFuture } from "../../utils/dateUtils";

const Post = ({ post: { title, slug, content, isDraft, date }, locale }) => {
  const visibleFrom = new Date(date);

  // Post remains unpublished when is draft or when date is in the future
  const isUnpublished =
    (isLiveEnv && isDraft) || (isLiveEnv && isFuture(visibleFrom));

  const components = {
    img: (props) => <PostImage slug={slug} locale={locale} {...props} />,
    em: (props) => <PostEmphasis {...props} />,
    a: (props) => <PostLink {...props} />,
  };

  return (
    <>
      {isUnpublished ? (
        <p>This post has not yet been published. Please try again later.</p>
      ) : (
        <div className="p-5">
          <MDX components={components}>{content}</MDX>
        </div>
      )}
    </>
  );
};

export default Post;
