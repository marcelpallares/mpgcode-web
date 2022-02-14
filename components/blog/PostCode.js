import styled from "styled-components";

const Code = styled.code`
  font-size: 0.9em;
`;

const PostCode = ({ ...otherProps }) => {
  return <Code {...otherProps} />;
};

export default PostCode;
