import React, { Component } from "react";
import "./App.css";

import Bots from "./pages/Bots";

const Dummy = () => <div>butt</div>;
const Dork = () => <div>bussstt</div>;

// prettier-ignore
const pages = new Map([
  ["Bots", Bots],
  ["dog", Dummy],
  ["bufus", Dork]
]);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: null
    };

    this.Index = [...pages.keys()].map((name, i) => (
      <div className="index-item" key={i}>
        <a
          onClick={() =>
            this.setState(() => ({
              currentPage: name
            }))
          }
        >
          {name}
        </a>
      </div>
    ));
  }

  render() {
    const { currentPage } = this.state;
    let page = null;
    if (currentPage) {
      const Comp = pages.get(currentPage);
      if (Comp) page = <Comp />;
    }

    return (
      <div className="wrapper">
        <header className="header">six ash portfolio</header>
        <aside className="sidebar">
          <span>index of works:</span>
          {this.Index}
        </aside>
        <article className="content">{page}</article>
        <footer className="footer">My footer</footer>
      </div>
    );
  }
}

export default App;
