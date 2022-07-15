import styled from "styled-components";

const PostContainer = styled.article`
  position: relative;
  -ms-transition: background-color 300ms linear;
  -webkit-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 0 0 1px #08090a1a;
  margin: 0 auto;

  .article-link {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.whiteHover};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 0.75rem);
  }
`;

const MainColumn = styled.div`
  @media (max-width: 768px) {
    display: inline-block !important;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 32px;

  a {
    color: ${(props) => props.theme.body};
  }
`;

const PostSubtitle = styled.p`
  font-size: 14px;
`;

export { PostContainer, MainColumn, PostTitle, PostSubtitle, ImageContainer };
