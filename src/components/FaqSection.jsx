import FaqToggle from './FaqToggle';
import {motion, AnimateSharedLayout} from 'framer-motion';
import {useScroll} from '../hooks';
import {scrollAnim} from '../animation';

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="faq-section"
      ref={element}
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <FaqToggle>
          <div className="question">
            <>What can you do?</>
            <div className="answer">
              <>
                I have worked on many projects using various technologies, both frontend and
                backend. Most notably I’ve worked with both <span className="inline">React</span>{' '}
                and <span className="inline">Vue</span> frameworks for JavaScript, and know my way
                around both of them.
              </>
              <>
                On the backend I’ve worked with a variety of programming languages along with their
                respective frameworks for the task, such as{' '}
                <span className="inline">Ruby on Rails</span> and{' '}
                <span className="inline">Django/Python</span>. I’ve also implemented both REST and
                GraphQL APIs.
              </>
            </div>
          </div>
        </FaqToggle>
        <FaqToggle>
          <div className="question">
            <>Why should we hire you?</>
            <div className="answer">
              <>
                Because I want to help your organisation deliver the best possible software
                solutions, for the web, desktop or mobile.{' '}
              </>
              <>
                I’m versatile and always up for diving into new programming languages, frameworks
                and methodologies. I don’t consider myself a Javascript, Python or Ruby developer,
                just <span className="inline">a developer</span>, so if you need me to learn Rust or
                Dart, Flask or Flutter, I am all in!
              </>
            </div>
          </div>
        </FaqToggle>

        <FaqToggle>
          <div className="question">
            <>
              No <span className="inline">really</span>, why YOU?
            </>
            <div className="answer">
              <>
                Because I consider myself a good team worker, who always strives to do better. I am
                easy and fun to be around, I am smiling, committed and not afraid to ask questions.
                Also, I ride a mountainbike, play boardgames and love virtual reality!
              </>
            </div>
          </div>
        </FaqToggle>
        <FaqToggle>
          <div className="question">
            <>Alright, you sound like a decent candidate, how do we catch you?</>
            <div className="answer">
              <>
                That's super easy, scroll to the top and hit '
                <span className="inline">connect</span>'
              </>
            </div>
          </div>
        </FaqToggle>
      </AnimateSharedLayout>
    </motion.div>
  );
}

export default FaqSection;
