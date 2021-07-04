import React, { useState, useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga";

const AnalyticsContext = React.createContext();
const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const options = { titleCase: false };

const AnalyticsProvider = (props) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const handleRouteChange = (url) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };

  useEffect(() => {
    if (!isInitialized) {
      ReactGA.initialize(trackingId, options);
      Router.events.on("routeChangeComplete", handleRouteChange);
      setIsInitialized(true);
    }

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <AnalyticsContext.Provider {...props} />;
};

const useTracking = () => React.useContext(AnalyticsContext);

export { AnalyticsProvider, useTracking };
