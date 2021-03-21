import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link id="logo" to="/">
          Mark Sahlgreen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">The Projects</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
