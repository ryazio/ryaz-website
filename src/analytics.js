import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initializeGA = (measurementId) => {
  if (!measurementId) {
    console.error('Google Analytics Measurement ID is missing');
    return;
  }
  ReactGA.initialize(measurementId);
  console.log('Google Analytics initialized');
};

// Track page views
export const trackPageView = (path) => {
  if (!path) {
    return;
  }
  ReactGA.send({ hitType: 'pageview', page: path });
};
