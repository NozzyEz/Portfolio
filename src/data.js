import {
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {faCode, faDatabase, faGem} from '@fortawesome/free-solid-svg-icons';

import nozzyMusicSplash from './images/nozzymusic_1.png';
import nozzymusic1 from './images/nozzymusic_3.png';
import nozzymusic2 from './images/nozzymusic_1.png';
import nozzymusic3 from './images/nozzymusic_2.png';
import test5 from './images/pexels-rodrigo-santos-3888151.jpg';
import test10 from './images/home1.png';

export const technologyData = [
  {
    name: 'HTML / CSS',
    icon: faHtml5,
    level: 7,
  },
  {
    name: 'Javascript',
    icon: faJsSquare,
    level: 6,
  },
  {
    name: 'Python',
    icon: faPython,
    level: 6,
  },
  {
    name: 'Ruby',
    icon: faGem,
    level: 4,
  },
  {
    name: 'Java',
    icon: faJava,
    level: 2,
  },
  {
    name: 'Scss / Sass',
    icon: faSass,
    level: 6,
  },
  {
    name: 'Vue.JS',
    icon: faVuejs,
    level: 6,
  },
  {
    name: 'React',
    icon: faReact,
    level: 5,
  },
  {
    name: 'RESTful',
    icon: faCode,
    level: 6,
  },
  {
    name: 'GraphQL',
    icon: faCode,
    level: 6,
  },
  {
    name: 'PostgresQL',
    icon: faDatabase,
    level: 5,
  },
  {
    name: 'Django',
    icon: faCode,
    level: 4,
  },
  {
    name: 'Rails',
    icon: faCode,
    level: 3,
  },
];

export const projectData = [
  {
    title: 'NozzyMusic',

    technologies: [technologyData[0], technologyData[5], technologyData[1], technologyData[7]],
    description:
      'My first project using React, featuring importing and playing music tracks from a website called Chillhop. Other noteworthy features include: shuffle mode, repeat one mode, repeat all mode, a playlist, animations when playing music and a darkmode theme',
    splash: nozzyMusicSplash,

    images: [
      {
        image: nozzymusic1,
        caption: 'showing off the UI',
      },
      {
        image: nozzymusic2,
        caption: 'playlist revealed tracking the active song',
      },
      {
        image: nozzymusic3,
        caption: 'dark mode toggled on, replacing the old color theme with a new one',
      },
      // {
      //   image: test5,
      //   caption: 'best project ever',
      // },
      // {
      //   image: test10,
      //   caption: 'best project ever',
      // },
    ],
    demo: 'https://nozzyez.github.io/NozzyMusic/',
    github: 'https://github.com/NozzyEz/NozzyMusic',
    url: '/projects/NozzyMusic',
  },
];
