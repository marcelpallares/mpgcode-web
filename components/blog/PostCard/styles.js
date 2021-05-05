import styled from "styled-components";

const PostContainer = styled.article`
  -ms-transition: background-color 300ms linear;
  -webkit-transition: background-color 300ms linear;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadius};
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  transition: background-color 300ms linear;
  width: 100%;
  display: inline-flex;
  box-shadow: 0 0 0 1px #08090a1a;

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
      background-color: ${(props) => props.theme.whiteHover2};
      cursor: pointer;
    }
  }

  &.loading {
    cursor: default;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 0.75rem);
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  max-width: 150px;
  margin-right: 0.75rem !important;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 !important;
  }
`;

const PostTitle = styled.h2`
  overflow: hidden;
  position: relative;
  margin-top: 0;
  &.loading {
    background-color: ${(props) => props.theme.placeholderGray};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 2px;
    min-height: 25px;
    min-width: 50%;
    width: fit-content;
  }

  a {
    color: ${(props) => props.theme.black};
    font-size: 24px;
    line-height: 1.5;
  }
`;

const PostTitleCompact = styled(PostTitle)`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostExcerptLine = styled.div`
  overflow: hidden;
  position: relative;

  &.loading {
    background-color: ${(props) => props.theme.placeholderGray};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 5px;
    min-height: 15px;
    min-width: 100%;
    width: fit-content;
  }
`;

const PostSubtitle = styled.p`
  overflow: hidden;
  position: relative;
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.theme.blueEb};

  &.loading {
    background-color: ${(props) => props.theme.placeholderGray};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 2px;
    min-height: 15px;
    min-width: 205px;
    width: fit-content;
  }
`;

export {
  PostContainer,
  PostTitle,
  PostExcerptLine,
  PostSubtitle,
  PostTitleCompact,
  ImageContainer,
};
