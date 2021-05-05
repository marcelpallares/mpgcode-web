import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 21px;
  margin-bottom: 1.5em;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 1.1em;
  }
`;

const PostParagraph = ({ ...otherProps }) => {
  return <Paragraph {...otherProps} />;
};

export default PostParagraph;
