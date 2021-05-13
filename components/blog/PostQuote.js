import styled from "styled-components";

const Blockquote = styled.blockquote`
  margin: 3em 0;
  margin-left: -15px;
  padding-left: 23px;
  box-shadow: inset 3px 0 0 0 ${(props) => props.theme.accent};
  color: ${(props) => props.theme.label};
`;

const PostQuote = ({ ...otherProps }) => {
  return <Blockquote {...otherProps} />;
};

export default PostQuote;
