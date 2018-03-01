import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">six ash portfolio</header>
        <aside className="sidebar">
          <span>index of works:</span>
          <div>
            <a>one</a>
          </div>
          <div>
            <a>two</a>
          </div>
          <div>
            <a>one</a>
          </div>
          <div>
            <a>one</a>
          </div>
          <div>
            <a>one</a>
          </div>
        </aside>
        <article className="content">
          <h1>2 column, header and footer</h1>
          <p>
            This example uses line-based positioning, to position the header and
            ooter, stretching them across the grid.
          </p>
        </article>
        <footer className="footer">My footer</footer>
      </div>
    );
  }
}

export default App;
