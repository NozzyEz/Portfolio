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

// Non FA Icons
import graphQL from './icons/GraphQL_Logo.svg';
import django from './icons/Django_logo.svg';
import rails from './icons/iconfinder_Ruby_on_Rails_2_282804.svg';
import gitLogo from './icons/git-seeklogo.com.svg';
import reduxIcon from './icons/redux-seeklogo.com.svg';
import restIcon from './icons/rest-api.svg';

// NozzyMusic Images
import nozzymusic1 from './images/nozzymusic/nozzymusic_3.png';
import nozzymusic2 from './images/nozzymusic/nozzymusic_1.png';
import nozzymusic3 from './images/nozzymusic/nozzymusic_2.png';
import nozzymusic4 from './images/nozzymusic/nozzymusic_4.png';
import nozzymusic5 from './images/nozzymusic/nozzymusic_5.png';

// BeatMixr Images
import beatmixr1 from './images/beatmixr/BeatMixr.png';
import beatmixr2 from './images/beatmixr/BeatMixr2.png';

// mini projects images
import website1 from './images/web-mp/website1.png';
import website2 from './images/web-mp/website2.png';
import website3 from './images/web-mp/website3.png';
import website4 from './images/web-mp/website4.png';
import website5 from './images/web-mp/website5.png';
import website6 from './images/web-mp/website6.png';
import website7 from './images/web-mp/website7.png';
import website8 from './images/web-mp/website8.png';
import website9 from './images/web-mp/website9.png';

// images for todolist
import todo1 from './images/todo1.png';

// Photon images
import photon1 from './images/photon/photon2.png';
import photon2 from './images/photon/photon1.png';

// animated fashion images
import fashion1 from './images/fashion-web/fashion1.png';
import fashion2 from './images/fashion-web/fashion2.png';
import fashion3 from './images/fashion-web/fashion3.png';

// Zaphyr Images
import zaphyr1 from './images/zaphyr/dashboard1.png';
import zaphyr2 from './images/zaphyr/dashboard2.png';
import zaphyr3 from './images/zaphyr/dashboard3.png';
import zaphyr4 from './images/zaphyr/dashboard4.PNG';
import zaphyr5 from './images/zaphyr/dashboard5.PNG';
import zaphyr6 from './images/zaphyr/dashboard6.PNG';
import zaphyr7 from './images/zaphyr/dashboard7.PNG';
import zaphyr8 from './images/zaphyr/dashboard8.PNG';
import zaphyr9 from './images/zaphyr/dashboard9.jpg';

// NN CHat images
import nnchat1 from './images/nnchat/nnchat1.PNG';
import nnchat2 from './images/nnchat/nnchat2.png';
import nnchat3 from './images/nnchat/nnchat3.PNG';
import nnchat4 from './images/nnchat/nnchat4.PNG';
import nnchat5 from './images/nnchat/nnchat5.PNG';

// Misc images
import pythonDjango from './images/python-django.png';

// Color Picker Images
import colorPicker1 from './images/colorpicker/colorpicker1.png';
import colorPicker2 from './images/colorpicker/colorpicker2.png';
import colorPicker3 from './images/colorpicker/colorpicker3.png';
import colorPicker4 from './images/colorpicker/colorpicker4.png';

export const technologyData = [
  {
    name: 'HTML / CSS',
    icon: faHtml5,
    isFAIcon: true,
  },
  {
    name: 'Javascript',
    icon: faJsSquare,
    isFAIcon: true,
  },
  {
    name: 'Python',
    icon: faPython,
    isFAIcon: true,
  },
  {
    name: 'Ruby',
    icon: faGem,
    isFAIcon: true,
  },
  {
    name: 'Java',
    icon: faJava,
    isFAIcon: true,
  },
  {
    name: 'Scss / Sass',
    icon: faSass,
    isFAIcon: true,
  },
  {
    name: 'Vue.JS',
    icon: faVuejs,
    isFAIcon: true,
  },
  {
    name: 'React',
    icon: faReact,
    isFAIcon: true,
  },
  {
    name: 'RESTful API',
    icon: restIcon,
    isFAIcon: false,
  },
  {
    name: 'GraphQL',
    icon: graphQL,
    isFAIcon: false,
  },
  {
    name: 'PostgresQL',
    icon: faDatabase,
    isFAIcon: true,
  },
  {
    name: 'Django',
    icon: django,
    isFAIcon: false,
  },
  {
    name: 'Rails',
    icon: rails,
    isFAIcon: false,
  },
  {
    name: 'Git',
    icon: gitLogo,
    isFAIcon: false,
  },
  {
    name: 'Redux',
    icon: reduxIcon,
    isFAIcon: false,
  },
];

export const projectData = [
  {
    title: 'NozzyMusic',

    technologies: [technologyData[0], technologyData[5], technologyData[1], technologyData[7]],
    description:
      'My first project using React, featuring importing and playing music tracks from a website called Chillhop. Other noteworthy features include: shuffle mode, repeat one mode, repeat all mode, a playlist, animations when playing music and a darkmode theme',
    splash: nozzymusic2,

    images: [
      {
        image: nozzymusic1,
        caption: 'Showing off the UI',
      },
      {
        image: nozzymusic2,
        caption: 'Playlist revealed tracking the active song',
      },
      {
        image: nozzymusic3,
        caption: 'Dark mode toggled on, replacing the old color theme with a new one',
      },
      {
        image: nozzymusic4,
        caption: 'The UI is responsive and looks great on a mobile device',
      },
      {
        image: nozzymusic5,
        caption: 'Responsive UI works for tablet sizes as well',
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
    title: 'NN Chat - E2EE instant messaging web app',

    technologies: [technologyData[0], technologyData[1], technologyData[6], technologyData[8]],
    description:
      'Social chat app that is fully end-2-end encrypted, designed in such a way that not even the server knows the identity of the user. \n The only way to connect two peers is via physical contact. the app creates a unique QR code for each person, which the other person must scan, once both have done so, they have established a secure connection using AES-128bit, with the initial handshake done with Diffie-Helmann',
    further_info:
      'On this app, which speaks to a django server via a REST API, my contribution was on the actual encryption part, making sure that the client encrypts a message on send, and when the other client receives, it decrypts succesfully',
    splash: nnchat1,

    images: [
      {
        image: nnchat1,
        caption: 'showing off the UI running in a desktop browser',
      },
      {
        image: nnchat2,
        caption: 'diagram showing how our implementation work with regards to adding a contact',
      },
      {
        image: nnchat3,
        caption:
          'showing the app launching the camera and generating a QR code, these two things are used to connect two individuals',
      },
      {
        image: nnchat4,
        caption: 'conversation overview',
      },
      {
        image: nnchat5,
        caption: 'sample conversation between two peers',
      },
    ],
    demo: '',
    github: [
      {
        url: 'https://github.com/NozzyEz/NNChat-Vue',
        title: '',
      },
    ],
    url: '/projects/nnchat',
  },
  {
    title: 'Heatster Backend',

    technologies: [technologyData[2], technologyData[11], technologyData[8]],
    description:
      'A project for university where we made a functional prototype of a smart thermostatic radiator valve system, for which I created a Python/Django backend running off of a Raspberry Pi, which was also my first time creating any sort of backend as well as a REST API',
    splash: pythonDjango,

    images: [
      {
        image: pythonDjango,
        caption:
          "being 100% backend, there aren't any nice pictures showing off the system from the perspective of my code",
      },
    ],
    demo: '',
    github: [
      {
        url: 'https://github.com/NozzyEz/Heatster-Server',
        title: '',
      },
    ],
    url: '/projects/heatster',
  },
  {
    title: 'Color Generator',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      'Simple Javascript project that I did without much flair for design, as it was more for utility. This is an app that generates you 5 random colors, or less if you locked any out prior to generating. The app allows you to save and load palettes from localStorage',
    splash: colorPicker1,

    images: [
      {
        image: colorPicker1,
        caption: 'General UI showing off 5 random colors being generated',
      },
      {
        image: colorPicker2,
        caption: 'save UI for saving your palette to localStorage',
      },
      {
        image: colorPicker3,
        caption: 'reactive sliders allowing the user fine control for adjusting any color',
      },
      {
        image: colorPicker4,
        caption: 'the library UI where the user can retreive previously saved palettes',
      },
    ],
    demo: 'https://nozzyez.github.io/Color-Picker/',
    github: [
      {
        url: 'https://github.com/NozzyEz/Color-Picker',
      },
    ],
    url: '/projects/colorGenerator',
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
    demo: 'https://nozzyez.github.io/BeatMixr/',
    github: [
      {
        url: 'https://github.com/NozzyEz/BeatMixr',
      },
    ],
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
    demo: 'https://nozzyez.github.io/Photon-Web/',
    github: [
      {
        url: 'https://github.com/NozzyEz/Photon-Web/',
        title: '',
      },
    ],
    url: '/projects/photon',
  },
  {
    title: 'Animated Fashion Website',

    technologies: [technologyData[0], technologyData[5], technologyData[1]],
    description:
      'Small website project made with Javascript using ScrollMagic and Gsap to do animations throughout, heavily animated with custom page transitions, event aware cursor and lots of effects',
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
    demo: 'https://nozzyez.github.io/Animated-Web/',
    github: [
      {
        url: 'https://github.com/NozzyEz/Animated-Web',
        title: '',
      },
    ],
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
    github: [
      {
        url: 'https://nozzyez.github.io/Travelly-Web/',
        title: 'Project 1 demo',
      },
      {
        url: 'https://github.com/NozzyEz/Travelly-Web',
        title: 'Project 1 GitHub',
      },
      {
        url: 'https://nozzyez.github.io/Photo-Web/',
        title: 'Project 2 demo',
      },
      {
        url: 'https://github.com/NozzyEz/Photo-Web',
        title: 'Project 2 GitHub',
      },
    ],
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
    demo: 'https://nozzyez.github.io/js-todo/',
    github: [
      {
        url: 'https://github.com/NozzyEz/js-todo',
        title: '',
      },
    ],
    url: '/projects/todoapp',
  },

  // {
  //   title: 'New Project',

  //   technologies: [technologyData[0], technologyData[5], technologyData[1]],
  //   description: '',
  //   splash: undefined,

  //   images: [
  //     {
  //       image: undefined,
  //       caption: '',
  //     },
  //   ],
  //   demo: '',
  //   github: [
  //     {
  //       url: '',
  //       title: '',
  //     },
  //   ],
  //   url: '/projects/',
  // },
];
