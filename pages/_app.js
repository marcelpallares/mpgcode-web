import Router from "next/router";
import NProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { AnalyticsProvider } from "../contexts/analytics";
import { GlobalStyle } from "../styles/global-styles";
import { MainTheme } from "../styles/theme";
import Page from "../components/common/Page";
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
    <AnalyticsProvider>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </AnalyticsProvider>
  );
};

export default appWithTranslation(MyApp);
