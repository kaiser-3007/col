import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const Routing = () => (
  <Router>
    <Route exact path="/">
      <div>App</div>
    </Route>
  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));