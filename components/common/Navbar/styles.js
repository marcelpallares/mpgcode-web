import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 36px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Burger = styled.a`
  @media screen and (min-width: 1024px) {
    & {
      display: none !important;
    }
  }
`;

export { Nav, Burger };
