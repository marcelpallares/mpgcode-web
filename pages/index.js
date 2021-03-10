import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import Meta from "../components/common/Meta";
import Caption from "../components/Caption";
import PostsList from "../components/blog/PostsList";
import { getAllPosts } from "../utils/blogUtils";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 100vh;
`;

const Home = ({ locale, posts }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Meta />
      <Caption text={t("home_caption")} />
      <PostsList posts={posts} locale={locale} />
      <LanguageSwitcher locale={locale} />
    </Container>
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
