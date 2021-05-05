import styled from "styled-components";
import PostParagraph from "./PostParagraph";

const List = styled.li`
  p {
    margin-bottom: 1em;
  }
`;

const PostListItem = ({ ...otherProps }) => {
  return (
    <List>
      <PostParagraph {...otherProps} />
    </List>
  );
};

export default PostListItem;
