import styled from "styled-components";

const Text = styled.h1`
  text-align: center;
  display: inline;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  color: ${(props) => props.theme.white};
  font-size: 2rem;
`;

const CaptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

export { CaptionContainer, Text };