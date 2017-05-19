import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { loadUsers } from './actions/usersActions';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
          <div className="slide-item">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-12-mobile is-12-tablet is-5-desktop carousel-item">
                </div>
                <div className="column is-12-mobile is-12-tablet is-7-desktop carousel-item">
                  <div className="slide-title">
                    Simple, Beautiful <span>and Amazing</span>
                  </div>
                  <div className="slide-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non .
                  </div>
                  <div className="slide-buttons center-xs">
                    <button
                      className="btn-empty"
                      onClick = {this.props.loadUsers}>
                      download
                    </button>
                    <button className="btn-empty">learn more</button>
                  </div>
                  <div className="slide-icons">
                    <span>Available on:</span>
                    <ul>
                      <li><a href=""><i className="fa fa-apple" aria-hidden="true"></i></a></li>
                      <li><a href=""><i className="fa fa-android" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
      </Slider>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps,{loadUsers})(Carousel);
