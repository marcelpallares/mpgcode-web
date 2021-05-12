import MDX from "@mdx-js/runtime";
import PostParagraph from "../PostParagraph";
import PostLink from "../PostLink";
import PostEmphasis from "../PostEmphasis";
import PostImage from "../PostImage";
import PostQuote from "../PostQuote";
import PostList from "../PostList";
import PostHeader from "../PostHeader";
import PostListOrdered from "../PostListOrdered";
import PostListItem from "../PostListItem";
import { isLiveEnv } from "../../../utils/helpers";
import { isFuture } from "../../../utils/dateUtils";
import { PostContainer, PostBody } from "./styles";

const Post = ({
  post,
  post: { title, slug, content, isDraft, date },
  locale,
}) => {
  const visibleFrom = new Date(date);

  // Post remains unpublished when is draft or when date is in the future
  const isUnpublished =
    (isLiveEnv && isDraft) || (isLiveEnv && isFuture(visibleFrom));

  const components = {
    img: (props) => <PostImage slug={slug} locale={locale} {...props} />,
    em: (props) => <PostEmphasis {...props} />,
    a: (props) => <PostLink {...props} />,
    p: (props) => <PostParagraph {...props} />,
    blockquote: (props) => <PostQuote {...props} />,
    ul: (props) => <PostList {...props} />,
    ol: (props) => <PostListOrdered {...props} />,
    li: (props) => <PostListItem {...props} />,
  };

  return (
    <>
      {isUnpublished ? (
        <p>This post has not yet been published. Please try again later.</p>
      ) : (
        <PostContainer>
          {/* <PostHeader post={post} /> */}
          <PostBody>
            <MDX components={components}>{content}</MDX>
          </PostBody>
        </PostContainer>
      )}
    </>
  );
};

export default Post;
