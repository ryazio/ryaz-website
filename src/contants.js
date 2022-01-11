import id1 from './images/employees/1.JPG';
import id2 from './images/employees/2.jpg';
import id3 from './images/employees/3.jpg';
import { ForbyIcon } from './icons/project';

import FORBY_TITLE from './images/projects/forby/title.png';
import FORBY_STACK_1 from './images/projects/forby/stack_1.png';
import FORBY_STACK_2 from './images/projects/forby/stack_2.png';
import FORBY_STACK_3 from './images/projects/forby/stack_3.png';
import FORBY_STACK_4 from './images/projects/forby/stack_4.png';
import FORBY_STACK_5 from './images/projects/forby/stack_5.png';
import FORBY_SLIDER_1 from './images/projects/forby/slider_1.png';
import FORBY_SLIDER_2 from './images/projects/forby/slider_2.png';
import FORBY_SLIDER_3 from './images/projects/forby/slider_3.png';
import FORBY_SLIDER_4 from './images/projects/forby/slider_4.png';
import FORBY_SLIDER_5 from './images/projects/forby/slider_5.png';
import FORBY_SLIDER_6 from './images/projects/forby/slider_6.png';
import FORBY_SLIDER_7 from './images/projects/forby/slider_7.png';
import FORBY_SLIDER_8 from './images/projects/forby/slider_8.png';
import FORBY_SLIDER_9 from './images/projects/forby/slider_9.png';
import FORBY_SLIDER_10 from './images/projects/forby/slider_10.png';
import FORBY_SLIDER_11 from './images/projects/forby/slider_11.png';
import FORBY_SLIDER_12 from './images/projects/forby/slider_12.png';
import FORBY_SLIDER_13 from './images/projects/forby/slider_13.png';
import FORBY_SLIDER_14 from './images/projects/forby/slider_14.png';

import FLAMENCOS_TITLE from './images/projects/flamencos-online/title.png';
import FLAMENCOS_STACK_1 from './images/projects/flamencos-online/stack_1.png';
import FLAMENCOS_STACK_2 from './images/projects/flamencos-online/stack_2.png';
import FLAMENCOS_STACK_3 from './images/projects/flamencos-online/stack_3.png';
import FLAMENCOS_STACK_4 from './images/projects/flamencos-online/stack_4.png';
import FLAMENCOS_STACK_5 from './images/projects/flamencos-online/stack_5.png';
import FLAMENCOS_SLIDER_1 from './images/projects/flamencos-online/slider_1.png';
import FLAMENCOS_SLIDER_2 from './images/projects/flamencos-online/slider_2.png';
import FLAMENCOS_SLIDER_3 from './images/projects/flamencos-online/slider_3.png';
import FLAMENCOS_SLIDER_4 from './images/projects/flamencos-online/slider_4.png';
import FLAMENCOS_SLIDER_5 from './images/projects/flamencos-online/slider_5.png';
import FLAMENCOS_SLIDER_6 from './images/projects/flamencos-online/slider_6.png';
import FLAMENCOS_SLIDER_7 from './images/projects/flamencos-online/slider_7.png';
import FLAMENCOS_SLIDER_8 from './images/projects/flamencos-online/slider_8.png';
import FLAMENCOS_SLIDER_9 from './images/projects/flamencos-online/slider_9.png';
import FLAMENCOS_SLIDER_10 from './images/projects/flamencos-online/slider_10.png';
import FLAMENCOS_SLIDER_11 from './images/projects/flamencos-online/slider_11.png';
import FLAMENCOS_SLIDER_12 from './images/projects/flamencos-online/slider_12.png';

import PUERTO_RICO_TITLE from './images/projects/puerto-rico/title.png';
import PUERTO_RICO_STACK_1 from './images/projects/puerto-rico/stack_1.png';
import PUERTO_RICO_STACK_2 from './images/projects/puerto-rico/stack_2.png';
import PUERTO_RICO_STACK_3 from './images/projects/puerto-rico/stack_3.png';
import PUERTO_RICO_STACK_4 from './images/projects/puerto-rico/stack_4.png';
import PUERTO_RICO_STACK_5 from './images/projects/puerto-rico/stack_5.png';
import PUERTO_RICO_SLIDER_1 from './images/projects/puerto-rico/slider_1.png';
import PUERTO_RICO_SLIDER_2 from './images/projects/puerto-rico/slider_2.png';
import PUERTO_RICO_SLIDER_3 from './images/projects/puerto-rico/slider_3.png';
import PUERTO_RICO_SLIDER_4 from './images/projects/puerto-rico/slider_4.png';
import PUERTO_RICO_SLIDER_5 from './images/projects/puerto-rico/slider_5.png';
import PUERTO_RICO_SLIDER_6 from './images/projects/puerto-rico/slider_6.png';
import PUERTO_RICO_SLIDER_7 from './images/projects/puerto-rico/slider_7.png';
import PUERTO_RICO_SLIDER_8 from './images/projects/puerto-rico/slider_8.png';
import PUERTO_RICO_SLIDER_9 from './images/projects/puerto-rico/slider_9.png';
import PUERTO_RICO_SLIDER_10 from './images/projects/puerto-rico/slider_10.png';
import PUERTO_RICO_SLIDER_11 from './images/projects/puerto-rico/slider_11.png';
import PUERTO_RICO_SLIDER_12 from './images/projects/puerto-rico/slider_12.png';

import WE_PATH_TITLE from './images/projects/we-path/title.png';
import WE_PATH_STACK_1 from './images/projects/we-path/stack_1.png';
import WE_PATH_STACK_2 from './images/projects/we-path/stack_2.png';
import WE_PATH_STACK_3 from './images/projects/we-path/stack_3.png';
import WE_PATH_STACK_4 from './images/projects/we-path/stack_4.png';
import WE_PATH_STACK_5 from './images/projects/we-path/stack_5.png';
import WE_PATH_STACK_6 from './images/projects/we-path/stack_6.png';

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
    case 'FORBY_STACK_2':
      return FORBY_STACK_2;
    case 'FORBY_STACK_3':
      return FORBY_STACK_3;
    case 'FORBY_STACK_4':
      return FORBY_STACK_4;
    case 'FORBY_STACK_5':
      return FORBY_STACK_5;
    case 'FORBY_SLIDER_1':
      return FORBY_SLIDER_1;
    case 'FORBY_SLIDER_2':
      return FORBY_SLIDER_2;
    case 'FORBY_SLIDER_3':
      return FORBY_SLIDER_3;
    case 'FORBY_SLIDER_4':
      return FORBY_SLIDER_4;
    case 'FORBY_SLIDER_5':
      return FORBY_SLIDER_5;
    case 'FORBY_SLIDER_6':
      return FORBY_SLIDER_6;
    case 'FORBY_SLIDER_7':
      return FORBY_SLIDER_7;
    case 'FORBY_SLIDER_8':
      return FORBY_SLIDER_8;
    case 'FORBY_SLIDER_9':
      return FORBY_SLIDER_9;
    case 'FORBY_SLIDER_10':
      return FORBY_SLIDER_10;
    case 'FORBY_SLIDER_11':
      return FORBY_SLIDER_11;
    case 'FORBY_SLIDER_12':
      return FORBY_SLIDER_12;
    case 'FORBY_SLIDER_13':
      return FORBY_SLIDER_13;
    case 'FORBY_SLIDER_14':
      return FORBY_SLIDER_14;

    case 'FLAMENCOS_TITLE':
      return FLAMENCOS_TITLE;
    case 'FLAMENCOS_STACK_1':
      return FLAMENCOS_STACK_1;
    case 'FLAMENCOS_STACK_2':
      return FLAMENCOS_STACK_2;
    case 'FLAMENCOS_STACK_3':
      return FLAMENCOS_STACK_3;
    case 'FLAMENCOS_STACK_4':
      return FLAMENCOS_STACK_4;
    case 'FLAMENCOS_STACK_5':
      return FLAMENCOS_STACK_5;
    case 'FLAMENCOS_SLIDER_1':
      return FLAMENCOS_SLIDER_1;
    case 'FLAMENCOS_SLIDER_2':
      return FLAMENCOS_SLIDER_2;
    case 'FLAMENCOS_SLIDER_3':
      return FLAMENCOS_SLIDER_3;
    case 'FLAMENCOS_SLIDER_4':
      return FLAMENCOS_SLIDER_4;
    case 'FLAMENCOS_SLIDER_5':
      return FLAMENCOS_SLIDER_5;
    case 'FLAMENCOS_SLIDER_6':
      return FLAMENCOS_SLIDER_6;
    case 'FLAMENCOS_SLIDER_7':
      return FLAMENCOS_SLIDER_7;
    case 'FLAMENCOS_SLIDER_8':
      return FLAMENCOS_SLIDER_8;
    case 'FLAMENCOS_SLIDER_9':
      return FLAMENCOS_SLIDER_9;
    case 'FLAMENCOS_SLIDER_10':
      return FLAMENCOS_SLIDER_10;
    case 'FLAMENCOS_SLIDER_11':
      return FLAMENCOS_SLIDER_11;
    case 'FLAMENCOS_SLIDER_12':
      return FLAMENCOS_SLIDER_12;

    case 'PUERTO_RICO_TITLE':
      return PUERTO_RICO_TITLE;
    case 'PUERTO_RICO_STACK_1':
      return PUERTO_RICO_STACK_1;
    case 'PUERTO_RICO_STACK_2':
      return PUERTO_RICO_STACK_2;
    case 'PUERTO_RICO_STACK_3':
      return PUERTO_RICO_STACK_3;
    case 'PUERTO_RICO_STACK_4':
      return PUERTO_RICO_STACK_4;
    case 'PUERTO_RICO_STACK_5':
      return PUERTO_RICO_STACK_5;
    case 'PUERTO_RICO_SLIDER_1':
      return PUERTO_RICO_SLIDER_1;
    case 'PUERTO_RICO_SLIDER_2':
      return PUERTO_RICO_SLIDER_2;
    case 'PUERTO_RICO_SLIDER_3':
      return PUERTO_RICO_SLIDER_3;
    case 'PUERTO_RICO_SLIDER_4':
      return PUERTO_RICO_SLIDER_4;
    case 'PUERTO_RICO_SLIDER_5':
      return PUERTO_RICO_SLIDER_5;
    case 'PUERTO_RICO_SLIDER_6':
      return PUERTO_RICO_SLIDER_6;
    case 'PUERTO_RICO_SLIDER_7':
      return PUERTO_RICO_SLIDER_7;
    case 'PUERTO_RICO_SLIDER_8':
      return PUERTO_RICO_SLIDER_8;
    case 'PUERTO_RICO_SLIDER_9':
      return PUERTO_RICO_SLIDER_9;
    case 'PUERTO_RICO_SLIDER_10':
      return PUERTO_RICO_SLIDER_10;
    case 'PUERTO_RICO_SLIDER_11':
      return PUERTO_RICO_SLIDER_11;
    case 'PUERTO_RICO_SLIDER_12':
      return PUERTO_RICO_SLIDER_12;

    case 'WE_PATH_TITLE':
      return WE_PATH_TITLE;
    case 'WE_PATH_STACK_1':
      return WE_PATH_STACK_1;
    case 'WE_PATH_STACK_2':
      return WE_PATH_STACK_2;
    case 'WE_PATH_STACK_3':
      return WE_PATH_STACK_3;
    case 'WE_PATH_STACK_4':
      return WE_PATH_STACK_4;
    case 'WE_PATH_STACK_5':
      return WE_PATH_STACK_5;
    default:
      return FORBY_STACK_4;
  }
};
