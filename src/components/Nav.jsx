import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link id="logo" to="/Portfolio">
          Mark Sahlgreen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/Portfolio">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio/projects">The Projects</Link>
        </li>
        <li>
          <Link to="/Portfolio/connect">Connect</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
