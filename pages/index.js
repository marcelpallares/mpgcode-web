import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import Meta from "../components/common/Meta";
import Caption from "../components/home/Caption";
import PostsList from "../components/blog/PostsList";
import { getAllPosts } from "../utils/blogUtils";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const Home = ({ locale, posts }) => {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <PostsList posts={posts} locale={locale} />
      <div className="p-3">
        <LanguageSwitcher locale={locale} />
      </div>
    </>
  );
};

/** Queries all the available posts and returns them to the page component.
 * It gets rebuilt after 1 second each time someone visits the page.
 */
export const getStaticProps = async ({ locale, locales }) => {
  const posts = getAllPosts({
    locale,
    fields: ["slug", "title", "excerpt", "date", "coverImage"],
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
      posts,
    },
    revalidate: 1, // In seconds
  };
};

export default Home;
