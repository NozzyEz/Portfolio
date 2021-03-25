import './scss/App.scss';

import Nav from './components/Nav';

import {Switch, Route, useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

// Pages
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import ProjectView from './pages/ProjectView';
import MobileProjectView from './pages/MobileProjectView';

import Connect from './pages/Connect';

function App() {
  const location = useLocation();
  const mql = window.matchMedia('(max-width: 500px');
  let mobileView = mql.matches;
  // console.log(mobileView);
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:id">{mobileView ? <MobileProjectView /> : <ProjectView />}</Route>
          <Route path="/connect">
            <Connect />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
