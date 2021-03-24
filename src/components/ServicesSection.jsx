import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {technologyData} from '../data';

import home2 from '../images/pexels-thisisengineering-3861959.jpg';

import {motion} from 'framer-motion';
import {scrollAnim} from '../animation';
import {useScroll} from '../hooks';

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="services-section"
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Technology <span>Overview</span>
      </h2>
      <div className="content">
        <div className="description">
          <div className="cards">
            {technologyData.map(tech => {
              return (
                <div className="card" key={tech.name}>
                  <div className="icon">
                    <FontAwesomeIcon icon={tech.icon} size="3x" />
                    <h4>{tech.name}</h4>
                  </div>
                  {/* <div className="skill-level">
                    <h4>{tech.level} / 10</h4>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="image">
          <img src={home2} alt="camera" />
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesSection;
