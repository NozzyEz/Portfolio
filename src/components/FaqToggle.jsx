import {useState} from 'react';
import {motion} from 'framer-motion';

function FaqToggle({children}) {
  const [toggle, setToggle] = useState(false);
  const question = children.props.children[0].props.children;
  const answer = children.props.children[1].props.children;

  return (
    <motion.div layout className="faq-toggle" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{question}</motion.h4>
      <p>{toggle && answer}</p>
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default FaqToggle;
