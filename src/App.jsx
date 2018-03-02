import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom";

import "./App.css";

import Bots from "./pages/Bots";

const Dummy = () => <div>butt</div>;
const Dork = () => <div>bussstt</div>;

// prettier-ignore
const routeData = [
  ["/bots", "Bots", Bots],
  ["/butt", "Butt", Dummy],
  ["/beef", "Basf", Dork]
];

const links = routeData.map(([route, name], i) => (
  <div key={i} className="index-item">
    <Link activeClassName="index-item-link--active" to={route}>
      {name}
    </Link>
  </div>
));

const routes = routeData.map(([route, , component], i) => (
  <Route key={i} path={route} component={component} />
));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header className="header">six ash portfolio</header>
          <aside className="sidebar">
            <span>index of works:</span>
            {links}
          </aside>
          <article className="content">
            <Route exact path="/" render={() => null} />
            {routes}
          </article>
          <footer className="footer">cool footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
