import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand" href="https://akashz19.github.io/Sorting-Visualizer/">
          Sorting Visualizer
        </a>
        <div className="navbar-nav ml-auto">
          <div className="nav-item ">
            <a
              className="nav-link "
              href="https://github.com/akashz19/Sorting-Visualizer.git"
            >
              Github Repo
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
