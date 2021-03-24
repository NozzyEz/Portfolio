// Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

import {motion} from 'framer-motion';
import {pageAnim} from '../animation';
import ScrollToTop from '../ScrollToTop';

function AboutUs() {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      {/* todo: redo services to skills */}
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
}

export default AboutUs;
