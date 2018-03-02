import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom";

import "./App.css";
import "./pages-util.css";

import Seers from "./pages/Seers";
import FranzEliza from "./pages/FranzEliza";
import Catbot from "./pages/Catbot";
import Aya from "./pages/Aya";
import FafPoster from "./pages/FafPoster";
//import ArcadeRoyale
//import EditorStudies
import PL90 from "./pages/PL90";
import QED from "./pages/QED";
import POAPoster from "./pages/POAPoster";
import Spaceteam from "./pages/Spaceteam";
import Realm from "./pages/Realm";
import Bort from "./pages/Bort";
import Heathbot from "./pages/Heathbot";
import Gangbot from "./pages/Gangbot";

const Placeholder = () => <div>pending</div>;

const routeData = [
  ["/seers", "The Seers Catalogue", Seers],
  ["/franz-eliza", "Franz & Eliza", FranzEliza],
  ["/catbot", "Catbot", Catbot],
  ["/aya", "Aya", Aya],
  ["/faf-poster", "Food Against Fascism", FafPoster],
  ["/arcade-royale", "Arcade Royale", Placeholder],
  ["/editor-studies", "Visual editor studies", Placeholder],
  ["/pl90", "PL@90 retrospective", PL90],
  ["/qed", "QED", QED],
  ["/poa-poster", "Prince of Arcade poster", POAPoster],
  ["/spaceteam", "Spaceteam websites", Spaceteam],
  ["/untitled-realm", "untitled (realm)", Realm],
  ["/bort", "Bort", Bort],
  ["/heathbot", "Heathbot", Heathbot],
  ["/gangbot", "Gangbot", Gangbot]
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
            {/* <span>index of works:</span> */}
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
