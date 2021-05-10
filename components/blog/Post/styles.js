import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PostBody = styled.div`
  max-width: 680px;
  margin: 0 24px;

  .img + p {
    font-size: 16px;
    margin: 0.5em;
    text-align: center;
    margin-bottom: 3.5em;
  }
`;

export { PostContainer, PostBody };