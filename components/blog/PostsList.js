import PostCard from "./PostCard";

const PostsList = ({ posts, locale }) => (
  <div className="container">
    {posts.length > 0 ? (
      <div className="py-5 mx-0 columns is-multiline is-mobile">
        {Object.keys(posts).map((id, index) => (
          <div
            key={id ?? index}
            className="py-2 column is-one-third-desktop is-half-tablet is-full-mobile"
          >
            <PostCard post={posts[id]} locale={locale} />
          </div>
        ))}
      </div>
    ) : (
      <p>No se han encontrado artículos.</p>
    )}
  </div>
);

export default PostsList;
