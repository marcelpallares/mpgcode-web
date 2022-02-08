import styled from "styled-components";

const ImageContainer = styled.div`
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const PostImage = ({ slug, src, locale, ...otherProps }) => {
  return (
    <ImageContainer className="image-container">
      <img src={`/posts/${locale}/${slug}/${src}`} {...otherProps} />
    </ImageContainer>
  );
};

export default PostImage;
