import Link from "next/link";
import { HeaderContainer, PostTitle } from "./styles";
import { getRelativeDate } from "../../../utils/dateUtils";

const PostHeader = ({
  locale,
  post: { title, slug, date, excerpt = null, coverImage = null } = {},
}) => {
  return (
    <HeaderContainer>
      <PostTitle>
        <Link href={`/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostTitle>
    </HeaderContainer>
  );
};

export default PostHeader;
