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

// NozzyMusic Images
import nozzyMusicSplash from './images/nozzymusic_1.png';
import nozzymusic1 from './images/nozzymusic_3.png';
import nozzymusic2 from './images/nozzymusic_1.png';
import nozzymusic3 from './images/nozzymusic_2.png';

// BeatMixr Images
import beatmixr1 from './images/BeatMixr.png';
import beatmixr2 from './images/BeatMixr2.png';

// mini projects images
import website1 from './images/website1.png';
import website2 from './images/website2.png';
import website3 from './images/website3.png';
import website4 from './images/website4.png';
import website5 from './images/website5.png';
import website6 from './images/website6.png';
import website7 from './images/website7.png';
import website8 from './images/website8.png';
import website9 from './images/website9.png';

// images for todolist
import todo1 from './images/todo1.png';

// Photon images
import photon1 from './images/photon2.png';
import photon2 from './images/photon1.png';

// animated fashion images
import fashion1 from './images/fashion1.png';
import fashion2 from './images/fashion2.png';
import fashion3 from './images/fashion3.png';

// Zaphyr Images
import zaphyr1 from './images/dashboard1.png';
import zaphyr2 from './images/dashboard2.png';
import zaphyr3 from './images/dashboard3.png';
import zaphyr4 from './images/dashboard4.PNG';
import zaphyr5 from './images/dashboard5.PNG';
import zaphyr6 from './images/dashboard6.PNG';
import zaphyr7 from './images/dashboard7.PNG';
import zaphyr8 from './images/dashboard8.PNG';
import zaphyr9 from './images/dashboard9.jpg';

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
    ],
    demo: 'https://nozzyez.github.io/NozzyMusic/',
    github: [
      {
        url: 'https://github.com/NozzyEz/NozzyMusic',
        title: '',
      },
    ],
    url: '/projects/NozzyMusic',
  },
  {
    title: 'Zaphyr - Order Management System',

    technologies: [
      technologyData[0],
      technologyData[1],
      technologyData[6],
      technologyData[9],
      technologyData[3],
      technologyData[12],
      technologyData[10],
    ],
    description:
      'A fully distributed system. \n The backend is created in Ruby on Rails and handles authentication and authorization as well as managing the database. It connects with the 2 frontend apps created for this project using a GraphQL API. \n First app is a PWA created in Vue, using Ionic as a component library. The second app is a desktop app created in Vue and Electron using Vuetify component library for rapid development',
    splash: zaphyr1,
    further_info:
      'This is an order management system that I developed for my Bachelor Thesis, with the idea that smaller shops or organizations, can cover their organizational needs for their members. The idea is that each member has the app on their mobile device and can create various orders based on a catalogue of items chosen by the organization, they can then add the items to their basket and choose how to pay, afterwards they can see their order history and check the status of old orders',
    images: [
      {
        image: zaphyr1,
        caption: 'Main dashboard after logging in where an overview of an event is shown',
      },
      {
        image: zaphyr2,
        caption: 'showing all orders from a date',
      },
      {
        image: zaphyr3,
        caption: 'showing a list of users affiliated with the organization',
      },
      {
        image: zaphyr4,
        caption: 'login screen for the PWA',
      },
      {
        image: zaphyr5,
        caption: "showing the menu the organization provides to it's users",
      },
      {
        image: zaphyr6,
        caption: 'example of a menu item where several of one could be added to the basket',
      },
      {
        image: zaphyr7,
        caption: "showing a user's current basket",
      },
      {
        image: zaphyr8,
        caption: 'Order confirmation after payment method has been selected',
      },
      {
        image: zaphyr9,
        caption:
          'the credit screen that doubles as a way to share the app with fellow members of the organization',
      },
    ],
    demo: '',
    github: [
      {
        url: 'https://github.com/NozzyEz/Zaphyr-API-Server',
        title: 'Github - Backend',
      },
      {
        url: 'https://github.com/NozzyEz/Zaphyr-Client-PWA',

        title: 'Github - PWA',
      },
      {
        url: 'https://github.com/NozzyEz/Zaphyr-Dashboard',

        title: 'Github - Desktop',
      },
    ],
    url: '/projects/zaphyr',
  },
  {
    title: 'NN Chat - E2EE instant messaging PWA',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description: '',
    splash: undefined,

    images: [
      {
        image: undefined,
        caption: '',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/nnchat',
  },
  {
    title: 'Heatster Backend',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description: '',
    splash: undefined,

    images: [
      {
        image: undefined,
        caption: '',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/heatster',
  },
  {
    title: 'Color Generator',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description: '',
    splash: undefined,

    images: [
      {
        image: undefined,
        caption: '',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/',
  },
  {
    title: 'BeatMixr',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      'Small JavaScript project using Scss. This project is a beat mixing app where you can blend snares, kicks and hihats to create a unique beat. the App features BPM settings to adjust the speed',
    splash: beatmixr1,

    images: [
      {
        image: beatmixr1,
        caption: 'features three tracks, one for each type of drum, and a BPM slider',
      },
      {
        image: beatmixr2,
        caption: 'individual tracks can be muted',
      },
    ],
    demo: 'https://nozzyez.github.io/NozzyMusic/',
    github: 'https://github.com/NozzyEz/NozzyMusic',
    url: '/projects/BeatMixr',
  },
  {
    title: 'Photon',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      'Photon is a project I made which fetches data and imports images from Pexels.com. \n The app allows you to search the pexels database via their API and find images according to the query',
    splash: photon1,

    images: [
      {
        image: photon1,
        caption: 'finds images based on the search query',
      },
      {
        image: photon2,
        caption: 'features pagination',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/photon',
  },
  {
    title: 'Animated Fashion Website',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      'Small website project made with Javascript using ScrollMagic to do animations throughout, heavily animated with custom page transitions, event aware cursor and lots of effects',
    splash: fashion1,

    images: [
      {
        image: fashion1,
        caption: 'shows the custom cursor reacting to being on top of a button',
      },
      {
        image: fashion2,
        caption: 'plenty of CSS magic being compiled with Scss',
      },
      {
        image: fashion3,
        caption: 'another cursor effect',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/fashion',
  },
  {
    title: 'Website mini projects',

    technologies: [technologyData[0], technologyData[5]],
    description:
      "A collection of website projects that I've created using HTML, CSS and Scss. All projects are fully responsive",
    splash: website1,

    images: [
      {
        image: website1,
        caption: 'first html/css based layout, features full screen layouts',
      },
      {
        image: website2,
        caption: 'using linear gradients and animations in subtle ways',
      },
      {
        image: website3,
        caption: 'first html/css based layout, features full screen layouts',
      },
      {
        image: website4,
        caption: 'first html/css based layout, features full screen layouts',
      },
      {
        image: website5,
        caption: 'responsive by design',
      },
      {
        image: website6,
        caption: 'second website is also responsive',
      },
      {
        image: website7,
        caption: 'uses a mixture of flex and grid based layouts',
      },
      {
        image: website8,
        caption: 'uses a mixture of flex and grid based layouts',
      },
      {
        image: website9,
        caption: '',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/miniprojects',
  },

  {
    title: 'Todo list app',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      "Everybody's maiden voyage is a todo app, and this is mine, while it is not the first thing I ever did in JavaScript, it is a project that I wanted to make to refresh my skills and ease into JS programming again",
    splash: todo1,

    images: [
      {
        image: todo1,
        caption: 'showing off the UI, with the filtering. App also features animation',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/todoapp',
  },

  {
    title: 'New Project',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description: '',
    splash: undefined,

    images: [
      {
        image: undefined,
        caption: '',
      },
    ],
    demo: '',
    github: '',
    url: '/projects/',
  },
];
