export const pageAnim = {
  hidden: {opacity: 0, y: 300},
  show: {opacity: 1, y: 0, transition: {duration: 0.4}},
  exit: {opacity: 0, y: 300, transition: {duration: 0.4}},
};
export const connectAnim = {
  hidden: {opacity: 0, y: 300},
  show: {opacity: 1, y: 0, transition: {duration: 0.4, staggerChildren: 0.4}},
  exit: {opacity: 0, y: 300, transition: {duration: 0.4}},
};

export const titleAnim = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 2}},
};

export const projectTitleAnim = {
  hidden: {x: 500, opacity: 0},
  show: {x: 0, opacity: 1, transition: {duration: 1.5, ease: 'easeOut', delay: 0.5}},
};
export const divAnim = {
  hidden: {x: 500},
  show: {x: 0, transition: {duration: 1.5, ease: 'easeOut', staggerChildren: 0.6}},
};

export const fadeAnim = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 2.5, ease: 'easeOut', delay: 1}},
};
export const scrollAnim = {
  hidden: {opacity: 0, scale: 0.8},
  show: {opacity: 1, scale: 1, transition: {duration: 0.6}},
  exit: {opacity: 0, scale: 0.8, transition: {duration: 0.6}},
};

export const titleImgAnim = {
  hidden: {scale: 1.6, opacity: 0},
  show: {scale: 1, opacity: 1, transition: {duration: 1.5, ease: 'easeOut'}},
};

export const waveAnim = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {duration: 1.2, delay: 1},
  },
};

export const lineAnim = {
  hidden: {x: '-100%'},
  show: {x: 0, transition: {duration: 1.2, delay: 1}},
};
