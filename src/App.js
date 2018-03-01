import React, { Component } from "react";
import "./App.css";

const Dummy = () => <div>butt</div>;
const Dork = () => <div>bussstt</div>;

// prettier-ignore
const pages = new Map([
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
    return (
      <div className="wrapper">
        <header className="header">six ash portfolio</header>
        <aside className="sidebar">
          <span>index of works:</span>
          {this.Index}
        </aside>
        <article className="content">
          {(pages.get(this.state.currentPage) || (() => {}))()}
        </article>
        <footer className="footer">My footer</footer>
      </div>
    );
  }
}

export default App;
