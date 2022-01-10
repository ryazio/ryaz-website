import id1 from './images/employees/1.JPG';
import id2 from './images/employees/2.jpg';
import id3 from './images/employees/3.jpg';
import { ForbyIcon } from './icons/project';

import FORBY_TITLE from './images/projects/forby/title.png';
import FORBY_STACK_1 from './images/projects/forby/stack_1.png';

export const employeeImageMapper = (employeeId) => {
  switch (employeeId) {
    case 1:
      return id1;
    case 2:
      return id2;
    case 3:
      return id3;
    default:
      return id1;
  }
};

export const projectLogoMapper = (projectId) => {
  switch (projectId) {
    case '01':
      return ForbyIcon;
    default:
      return ForbyIcon;
  }
};

export const projectImageMapper = (imageName) => {
  switch (imageName) {
    case 'FORBY_TITLE':
      return FORBY_TITLE;
    case 'FORBY_STACK_1':
      return FORBY_STACK_1;
    default:
      return FORBY_STACK_1;
  }
};
