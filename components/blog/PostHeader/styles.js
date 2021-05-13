import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 2rem 0;
  margin-top: 1rem;
  font-size: 14px;

  img {
    display: block;
    border-radius: 50%;
  }

  address {
    font-style: normal;
  }
`;

const PostTitle = styled.h1`
  margin: 0;
`;

export { HeaderContainer, PostTitle };
