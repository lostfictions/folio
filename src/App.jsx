import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom";

import "./App.css";
import "./pages-util.css";

import Bots from "./pages/Bots";
import FranzEliza from "./pages/FranzEliza";
import KnyttUnderground from "./pages/KnyttUnderground";
import PL90 from "./pages/PL90";
import Posters from "./pages/Posters";
import QED from "./pages/QED";
import Realm from "./pages/Realm";
import Seers from "./pages/Seers";
import WebDesign from "./pages/WebDesign";

// prettier-ignore
const routeData = [
  ["/bots", "Bots", Bots],
  ["/franz-eliza", "Franz & Eliza", FranzEliza],
  ["/knytt-mus", "Knytt Underground (music)", KnyttUnderground],
  ["/pl90", "PL@90", PL90],
  ["/posters", "Posters", Posters],
  ["/qed", "QED", QED],
  ["/untitled-realm", "untitled (realm)", Realm],
  ["/seers", "The Seers Catalogue", Seers],
  ["/webdesign", "Spaceteam Websites", WebDesign]
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
          {/* <footer className="footer">cool footer</footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
