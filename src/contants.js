import id1 from './images/employees/1.JPG';
import id2 from './images/employees/2.jpg';
import id3 from './images/employees/3.jpg';
import { ForbyIcon } from './icons/project';

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
