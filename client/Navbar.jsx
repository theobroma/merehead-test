import React, { Component } from 'react';
import classnames from 'classnames';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <nav className={classnames('nav', { 'is-active': this.state.open })}>
        <div className="nav-left">
          <a href="/">
            <img src="images/logo.png" alt="logo"/>
          </a>
        </div>

        <span className={classnames('nav-toggle', { 'is-active': this.state.open })}  onClick = {this.handleClick} >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={classnames('nav-right', 'nav-menu', { 'is-active': this.state.open })} >
          <a className="nav-item">
            <span>Home</span>
          </a>
          <a className="nav-item">
            <span>Features</span>
          </a>
          <a className="nav-item">
            <span>Gallery</span>
          </a>
          <a className="nav-item">
            <span>Video</span>
          </a>
          <a className="nav-item">
            <span>Prices</span>
          </a>
          <a className="nav-item">
            <span>Testimonials</span>
          </a>
          <a className="nav-item">
            <span>Download</span>
          </a>
          <a className="nav-item">
            <span>Contact</span>
          </a>
        </div>
      </nav>
    );
  }
}
