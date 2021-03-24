import {Link} from 'react-router-dom';
import {useState} from 'react';
import {projectData} from '../data';

import {motion} from 'framer-motion';
import {pageAnim, lineAnim, projectTitleAnim, titleImgAnim} from '../animation';
function Projects() {
  const [projects] = useState(projectData);

  return (
    <motion.div className="work" variants={pageAnim} initial="hidden" animate="show" exit="exit">
      {projects.map(project => {
        // console.log(project);
        return (
          <div className="project" key={project.title}>
            <motion.h2 variants={projectTitleAnim}>{project.title}</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to={project.url}>
              <motion.img src={project.splash} alt="splash img" variants={titleImgAnim} />
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Projects;
