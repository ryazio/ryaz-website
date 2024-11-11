import React from 'react';
import NuieeIcon from '../../images/projectIcons/Nuiee.svg';

const Nuiee = (props) => (
  <img src={NuieeIcon} alt="nuiee-logo" style={{ width: '64px', height: '64px', filter: 'invert(100%) brightness(200%)' }} {...props} />
);

export default Nuiee;
