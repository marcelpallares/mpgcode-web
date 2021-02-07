import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Meta from "../components/Meta";
import Caption from "../components/Caption";

const Container = styled.div`
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  height: 100vh;
`;

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Meta />
      <Caption text={t("home.caption")} />
    </Container>
  );
};

export default Home;
