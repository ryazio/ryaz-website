import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { trackPageView } from '../analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname); // Track page views on route change
  }, [location]);

  return null;
};
export default AnalyticsTracker;
