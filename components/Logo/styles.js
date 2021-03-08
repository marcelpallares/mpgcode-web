import styled from "styled-components";

const StyledSVG = styled.svg`
  height: 50px;
  fill: ${(props) => props.theme.primary};

  &.white {
    fill: ${(props) => props.theme.white};
  }

  &.accent {
    fill: ${(props) => props.theme.accent};
  }
`;

export { StyledSVG };
