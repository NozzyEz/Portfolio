//Images
import home1 from '../images/pexels-luis-gomes-546819.jpg';

import {motion} from 'framer-motion';
import {divAnim, titleAnim, fadeAnim, titleImgAnim} from '../animation';

import Wave from './Wave';

function AboutSection() {
  return (
    <div className="about-section">
      <Wave />
      <div className="description">
        <motion.div className="title" variants={divAnim} initial="hidden" animate="show">
          <div className="hide">
            <motion.h2 variants={titleAnim}>Frontend Developer</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              Making your <span>ideas</span> and concepts
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              come to <span>life</span>
            </motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fadeAnim} className="splash-text">
          Helping your <span>business</span> develop better and more sturdy software platforms
          within an <span>Agile</span> enviornment, with an emphasis on <span>UI/UX</span>
        </motion.p>
        <motion.a
          variants={fadeAnim}
          href="https://www.linkedin.com/in/mark-sahlgreen-359006122/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Connect</button>
        </motion.a>
      </div>
      <div className="image">
        <motion.img
          variants={titleImgAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="code"
        />
      </div>
    </div>
  );
}

export default AboutSection;
