import {motion} from "framer-motion";
import {fadeAnim, connectAnim, projectTitleAnim, titleAnim} from "../animation";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";

import Wave from "../components/Wave";
import ScrollToTop from "../ScrollToTop";

function Connect() {
  return (
    <motion.div
      className="connect"
      variants={connectAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wave />
      <motion.h2 className="title" variants={projectTitleAnim}>
        Get in touch!
      </motion.h2>
      <motion.div variants={fadeAnim} className="line"></motion.div>
      <div className="container">
        <motion.div variants={titleAnim} className="social-media">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
          <a
            href="https://www.linkedin.com/in/mark-sahlgreen-359006122/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>
              Connect with me on <span>LinkedIn</span>
            </h3>
          </a>
        </motion.div>
        <motion.div variants={titleAnim} className="social-media">
          <FontAwesomeIcon icon={faGithub} size="4x" />
          <a href="https://github.com/NozzyEz" target="_blank" rel="noreferrer">
            <h3>
              Check out my <span>code</span> at Github
            </h3>
          </a>
        </motion.div>
        <motion.div variants={titleAnim} className="social-media">
          <FontAwesomeIcon icon={faMailBulk} size="4x" />
          <a href="mailto:mark@nozzy.org">
            <h3>
              send me an <span>email</span> at: mark@nozzy.org
            </h3>
          </a>
        </motion.div>
      </div>
      <ScrollToTop />
    </motion.div>
  );
}

export default Connect;
