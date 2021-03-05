import Link from "next/link";
import {
  PostContainer,
  PostTitle,
  PostTitleCompact,
  PostSubtitle,
  ImageContainer,
} from "./styles";
import PostImage from "../PostImage";
import { getRelativeDate } from "../../../utils/dateUtils";

const PostCard = ({
  locale,
  compact,
  post: { title, slug, date, excerpt = null, coverImage = null } = {},
}) => {
  const imageUrl = coverImage ? `url("${coverImage}")` : "";

  let subtitle = "";
  if (date) {
    if (subtitle) subtitle += " | ";
    subtitle += getRelativeDate({ locale, date: new Date(date) });
  }

  return (
    <PostContainer>
      <Link href={`/${slug}`}>
        <a className="article-link" aria-label={title} />
      </Link>
      {imageUrl && (
        <ImageContainer>
          <PostImage src={coverImage} slug={slug} locale={locale} />
        </ImageContainer>
      )}

      <div className="px-5 py-5">
        {compact ? (
          <PostTitleCompact className="is-heavy">
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </PostTitleCompact>
        ) : (
          <PostTitle className="is-heavy">
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </PostTitle>
        )}

        <PostSubtitle className={`mt-3 ${compact ? "mb-3" : "mb-5"}`}>
          {subtitle}
        </PostSubtitle>

        {!compact && excerpt && (
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        )}
      </div>
    </PostContainer>
  );
};

export default PostCard;
