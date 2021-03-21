// Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

function AboutUs() {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      {/* todo: redo services to skills */}
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
