import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const trackPageView = (url: string) => {
  (window as any).gtag?.("event", "page_view", { page_path: url });
};

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <Outlet />;
};

export default RouteTracker;
