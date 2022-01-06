/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useEffect, useState,
} from 'react';

const MediaQueryContext = createContext();

export { MediaQueryContext };
export const MediaQueryProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const media = {
    mobileSmall: '(max-width: 365px)',
    mobile: '(max-width: 550px)',
    mobileLarge: '(max-width: 581px)',
    tablet: '(max-width: 768px)',
    tabletMedium: '(max-width: 906px)',
    tabletLarge: '(max-width: 1214px)',
    desktop: '(max-width: 1380px)',
    desktopLarge: '(max-width: 1840px)',
  };

  const mobileSmall = window.matchMedia(media.mobileSmall);
  const mobile = window.matchMedia(media.mobile);
  const mobileLarge = window.matchMedia(media.mobileLarge);
  const tablet = window.matchMedia(media.tablet);
  const tabletMedium = window.matchMedia(media.tabletMedium);
  const tabletLarge = window.matchMedia(media.tabletLarge);
  const desktop = window.matchMedia(media.desktop);
  const desktopLarge = window.matchMedia(media.desktopLarge);

  const listener = () => {
    const mediaSizes = [];
    if (mobileSmall.matches) {
      mediaSizes.push('mobileSmall');
    }
    if (mobile.matches) {
      mediaSizes.push('mobile');
    }
    if (mobileLarge.matches) {
      mediaSizes.push('mobileLarge');
    }
    if (tablet.matches) {
      mediaSizes.push('tablet');
    }
    if (tabletMedium.matches) {
      mediaSizes.push('tabletMedium');
    }
    if (tabletLarge.matches) {
      mediaSizes.push('tabletLarge');
    }
    if (desktop.matches) {
      mediaSizes.push('desktop');
    }
    if (desktopLarge.matches) {
      mediaSizes.push('desktopLarge');
    }
    setMatches(mediaSizes);
  };

  useEffect(() => {
    listener();

    mobileSmall.addEventListener('change', listener);
    mobile.addEventListener('change', listener);
    mobileLarge.addEventListener('change', listener);
    tablet.addEventListener('change', listener);
    tabletMedium.addEventListener('change', listener);
    tabletLarge.addEventListener('change', listener);
    desktop.addEventListener('change', listener);
    desktopLarge.addEventListener('change', listener);
    return () => {
      mobileSmall.removeEventListener('change', listener);
      mobile.removeEventListener('change', listener);
      mobileLarge.removeEventListener('change', listener);
      tablet.removeEventListener('change', listener);
      tabletMedium.removeEventListener('change', listener);
      tabletLarge.removeEventListener('change', listener);
      desktop.removeEventListener('change', listener);
      desktopLarge.removeEventListener('change', listener);
    };
  }, []);

  const selectStyle = (styleMedia) => {
    let finalCss = {};
    const matchMaker = (screenSize) => {
      if (matches.includes(screenSize)) {
        finalCss = { ...finalCss, ...(styleMedia[screenSize] || {}) };
      }
    };
    Object.keys(media).reverse()
      .forEach((mediaSize) => matchMaker(mediaSize));
    return finalCss;
  };

  return (
    <MediaQueryContext.Provider value={selectStyle}>
      {children}
    </MediaQueryContext.Provider>
  );
};
