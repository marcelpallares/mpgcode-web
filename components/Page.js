import Router from "next/router";
import NProgress from "nprogress";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "../styles/theme";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const PageContent = styled.div`
  min-height: 100vh;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <PageContent>{children}</PageContent>
    </ThemeProvider>
  );
};

export default Page;
