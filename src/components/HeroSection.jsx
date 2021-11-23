//Images
import home1 from "../images/pexels-luis-gomes-546819.jpg";

import {motion} from "framer-motion";
import {divAnim, titleAnim, fadeAnim, titleImgAnim} from "../animation";

import Wave from "./Wave";

function HeroSection() {
  return (
    <div className="about-section">
      <Wave />
      <div className="description">
        <motion.div className="title" variants={divAnim} initial="hidden" animate="show">
          <div className="hide">
            <motion.h2 variants={titleAnim}>Software Developer</motion.h2>
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
          within an <span>Agile</span> enviornment.
        </motion.p>
        <motion.p variants={fadeAnim} className="splash-text">
          With a flair for both <span>UI/UX</span> and <span>Backend</span> I am the ideal candidate
          for your business, <span>scroll</span> down for an overview of the technologies I have
          worked with. or skip to the <span>projects</span> above to see a sample of what I have
          done so far
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

export default HeroSection;
