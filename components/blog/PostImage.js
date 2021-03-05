const PostImage = ({ slug, src, locale, ...otherProps }) => {
  return <img src={`posts/${locale}/${slug}/${src}`} {...otherProps} />;
};

export default PostImage;
