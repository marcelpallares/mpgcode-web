import { MDXRemote } from "next-mdx-remote";
import PostParagraph from "../PostParagraph";
import PostLink from "../PostLink";
import PostEmphasis from "../PostEmphasis";
import PostImage from "../PostImage";
import PostQuote from "../PostQuote";
import PostList from "../PostList";
import PostHeader from "../PostHeader";
import PostListOrdered from "../PostListOrdered";
import PostListItem from "../PostListItem";
import PostEmoji from "../PostEmoji";
import PostCode from "../PostCode";
import { PostContainer, PostBody } from "./styles";

const Post = ({ post, post: { slug, content }, locale }) => {
  const components = {
    img: (props) => <PostImage slug={slug} locale={locale} {...props} />,
    em: (props) => <PostEmphasis {...props} />,
    a: (props) => <PostLink {...props} />,
    p: (props) => <PostParagraph {...props} />,
    blockquote: (props) => <PostQuote {...props} />,
    ul: (props) => <PostList {...props} />,
    ol: (props) => <PostListOrdered {...props} />,
    li: (props) => <PostListItem {...props} />,
    emoji: (props) => <PostEmoji {...props} />,
    code: (props) => <PostCode {...props} />,
  };

  return (
    <>
      <PostContainer>
        <PostBody>
          <PostHeader post={post} locale={locale} />
          <MDXRemote {...content} components={components} />
        </PostBody>
      </PostContainer>
    </>
  );
};

export default Post;
