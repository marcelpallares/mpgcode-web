import Router from "next/router";
import NProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import Page from "../components/Page";
import "../styles/styles.scss";
import "../node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default appWithTranslation(MyApp);
