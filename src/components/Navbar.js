import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            <nav className="navbar navbar-dark bg-primary px-3">
              <Link to="/" className="navbar-brand">
                <i className={this.props.icon}></i>
                <span className="px-2">{this.props.title}</span>
              </Link>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "Github Finder",
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
