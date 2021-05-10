import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PostImage = ({ slug, src, locale, ...otherProps }) => {
  return (
    <ImageContainer className="image-container">
      <img src={`posts/${locale}/${slug}/${src}`} {...otherProps} />
    </ImageContainer>
  );
};

export default PostImage;
