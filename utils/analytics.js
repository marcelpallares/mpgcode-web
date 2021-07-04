import ReactGA from "react-ga";
import Router from "next/router";

const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    titleCase: false,
  });
};

const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};

export const initializeAnalytics = () => {
  initGA();
  logPageView();
  Router.events.on("routeChangeComplete", logPageView);
};
