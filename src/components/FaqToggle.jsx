import {useState} from 'react';
import {motion} from 'framer-motion';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

function FaqToggle({children}) {
  const [toggle, setToggle] = useState(false);
  const question = children.props.children[0].props.children;
  const answer = children.props.children[1].props.children;

  return (
    <motion.div layout className="faq-toggle" onClick={() => setToggle(!toggle)}>
      <div className="question-container">
        <motion.h4 layout>{question}</motion.h4>
        <FontAwesomeIcon icon={toggle ? faCaretUp : faCaretDown} size="3x" />
      </div>
      <p>{toggle && answer}</p>
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default FaqToggle;
