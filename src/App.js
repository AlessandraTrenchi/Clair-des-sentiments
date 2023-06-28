import React from 'react'; //example of routing system
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Disclaimer from './components/Disclaimer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};
//each route is associated with a specific component, when the corresponding URL is accessed, the associated component is rendered.

export default App;
