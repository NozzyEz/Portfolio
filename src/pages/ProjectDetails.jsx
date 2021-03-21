import {projectData} from '../data';

import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {ImgSlider} from '../components/Carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ProjectDetails() {
  const history = useHistory();
  const url = history.location.pathname;

  // const [projects] = useState(Data);
  const [projects] = useState(projectData);
  const [project, setProject] = useState();

  useEffect(() => {
    const currentProject = projects.filter(state => state.url === url);
    setProject(currentProject[0]);
    console.log(currentProject);
  }, [projects, url]);

  return (
    <motion.div
      className="project-section"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {project && (
        <div className="project-details">
          <h2 className="title">{project.title}</h2>
          <div className="line"></div>
          <div className="container">
            <div className="info">
              <div className="tech-container">
                <h4>Technologies used:</h4>
                <div className="line"></div>
                {project.technologies.map(technology => (
                  <div className="tech" key={technology.name}>
                    <FontAwesomeIcon className="icon" icon={technology.icon} size="2x" />
                    <p>{technology.name}</p>
                  </div>
                ))}
              </div>
              <div className="description">
                <h4>Description:</h4>
                <div className="line"></div>
                <p>{project.description}</p>
              </div>
              <div className="project-btns">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn">
                    <button>Live Demo</button>
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
                  <button>GitHub Repository</button>
                </a>
              </div>
            </div>
            <ImgSlider className="slider" images={project.images} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectDetails;
