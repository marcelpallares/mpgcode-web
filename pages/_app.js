import { appWithTranslation } from "next-i18next";
import Page from "../components/Page";
import "../styles/nprogress.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default appWithTranslation(MyApp);
