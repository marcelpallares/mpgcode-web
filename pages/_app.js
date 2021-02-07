import { I18nextProvider } from "react-i18next";
import i18n from "../locale";
import Page from "../components/Page";
import "../styles/nprogress.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </I18nextProvider>
  );
};

export default MyApp;
