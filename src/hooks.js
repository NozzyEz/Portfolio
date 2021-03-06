import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

//* React hook that checks if an element is at least 20% in view, and trigger's the elements animation if true
export function useScroll() {
  const controls = useAnimation();
  const [element, view] = useInView({threshold: 0.2});
  controls.start(view ? 'show' : 'exit');

  return [element, controls];
}
