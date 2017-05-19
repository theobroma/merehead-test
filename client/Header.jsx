import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-navbar">
          <div className="container">
            <Navbar/>
          </div>
        </div>
        <div className="carousel-wrap">
          <Carousel/>
        </div>
      </div>
    );
  }
}
