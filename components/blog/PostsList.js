import { useTranslation } from "next-i18next";
import PostCard from "./PostCard";

const PostsList = ({ posts, locale }) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {posts.length > 0 ? (
        <div className="py-5 mx-0 columns is-multiline is-mobile">
          {Object.keys(posts).map((id, index) => (
            <div
              key={id ?? index}
              className="py-2 column is-full-desktop is-full-tablet is-full-mobile"
            >
              <PostCard post={posts[id]} locale={locale} />
            </div>
          ))}
        </div>
      ) : (
        <p>{t("posts.no_posts")}</p>
      )}
    </div>
  );
};

export default PostsList;
