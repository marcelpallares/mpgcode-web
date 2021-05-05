import styled from "styled-components";

const Link = styled.a`
  text-decoration: underline;
  /* color: inherit; */
`;

const PostLink = ({ ...otherProps }) => {
  return <Link target="_blank" {...otherProps} />;
};

export default PostLink;
