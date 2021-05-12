import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 36px;
  color: initial;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Burger = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none !important;
  }
`;

export { Nav, Burger };
