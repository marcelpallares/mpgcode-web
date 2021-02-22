const PostImage = ({ slug, src, ...otherProps }) => {
  return <img src={`posts/${slug}/${src}`} {...otherProps} />;
};

export default PostImage;
