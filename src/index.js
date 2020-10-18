import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SphereLighting from './pages/SphereLighting';

const Routing = () => (
  <Router>
    <Route exact path="/sphereLighting">
      <SphereLighting />
    </Route>
  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));