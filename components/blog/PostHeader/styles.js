import styled from "styled-components";

const HeaderContainer = styled.div``;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 32px;

  a {
    color: ${(props) => props.theme.black};
  }
`;

export { HeaderContainer, PostTitle };
