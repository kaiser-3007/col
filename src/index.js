import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SphereLighting from './pages/SphereLighting';
import Form from './pages/Form';

const Routing = () => (
  <Router>
    <Route exact path="/sphereLighting">
      <SphereLighting />
    </Route>

    <Route exact path="/form">
      <Form />
    </Route>
  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));