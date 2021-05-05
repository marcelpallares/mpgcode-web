import styled from "styled-components";

const List = styled.ol`
  list-style-type: decimal;
  padding-left: 1em;
  margin-bottom: 4em;

  li::marker {
    font-size: 21px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const PostList = ({ ...otherProps }) => {
  return <List {...otherProps} />;
};

export default PostList;
