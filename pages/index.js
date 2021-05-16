import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../components/common/Meta";
import HomeHeader from "../components/home/HomeHeader";
import PostsList from "../components/blog/PostsList";
import { getAllPosts } from "../utils/blogUtils";

const Home = ({ locale, posts }) => {
  return (
    <>
      <Meta />
      <HomeHeader />
      <PostsList posts={posts} locale={locale} />
    </>
  );
};

/*
 * Queries all the available posts and returns them to the page component.
 */
export const getStaticProps = async ({ locale }) => {
  const posts = getAllPosts({
    locale,
    fields: ["slug", "title", "excerpt", "date", "coverImage"],
  });

  return {
    props: {
      locale,
      posts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
