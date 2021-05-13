import Link from "next/link";
import {
  PostContainer,
  MainColumn,
  PostTitle,
  PostSubtitle,
  ImageContainer,
} from "./styles";
import PostImage from "../PostImage";
import { getFormattedDate } from "../../../utils/dateUtils";

const PostCard = ({
  locale,
  post: { title, slug, date, excerpt = null, coverImage = null } = {},
}) => {
  const imageUrl = coverImage ? `url("${coverImage}")` : "";

  let formattedDate = getFormattedDate({ locale, date: new Date(date) });

  return (
    <PostContainer>
      <Link href={`/${slug}`}>
        <a className="article-link" aria-label={title} />
      </Link>
      <div className="columns is-gapless">
        <MainColumn className="column is-four-fifths m-3">
          <PostTitle className="is-heavy">
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </PostTitle>
          <PostSubtitle className="py-2 mb-4">
            <time pubdate datetime={date}>
              {formattedDate}
            </time>
          </PostSubtitle>
          {excerpt && <div dangerouslySetInnerHTML={{ __html: excerpt }} />}
        </MainColumn>

        {imageUrl && (
          <ImageContainer className="column">
            <PostImage src={coverImage} slug={slug} locale={locale} />
          </ImageContainer>
        )}
      </div>
    </PostContainer>
  );
};

export default PostCard;
