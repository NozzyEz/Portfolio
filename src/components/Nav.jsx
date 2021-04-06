import {Link, useLocation} from 'react-router-dom';

import {motion} from 'framer-motion';

function Nav() {
  const {pathname} = useLocation();
  return (
    <nav className="nav-bar">
      <h1>
        <Link id="logo" to="/">
          Mark Sahlgreen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <motion.div
            className="nav-line"
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '100%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <motion.div
            className="nav-line"
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname.includes('/projects') ? '100%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/connect">Connect</Link>
          <motion.div
            className="nav-line"
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/connect' ? '100%' : '0%'}}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
