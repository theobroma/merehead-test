import React, { Component } from 'react';

export default class Features extends Component {
  render() {
    return (
      <section className="section features">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 center">
              <h2 className="section-title">Summarise the features</h2>
              <span className="section-subtitle">summarise what your product is all about</span>
            </div>
            <div className="column is-12 feature-list">
              <div className="columns is-multiline">
                <div className="column is-12-mobile is-3-tablet is-3-desktop feature-item center">
                  <div className="feature-img">
                    <img src="icons/lamp.png" alt="lamp"/>
                  </div>
                  <div className="feature-title">Attractive Layout</div>
                  <div className="feature-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. </div>
                </div>
                <div className="column is-12-mobile is-3-tablet is-3-desktop feature-item">
                  <div className="feature-img">
                    <img src="icons/tablet.png" alt="tablet"/>
                  </div>
                  <div className="feature-title">Fresh design</div>
                  <div className="feature-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. </div>
                </div>
                <div className="column is-12-mobile is-3-tablet is-3-desktop feature-item">
                  <div className="feature-img">
                    <img src="icons/comments-bubbles.png" alt="comments-bubbles"/>
                  </div>
                  <div className="feature-title">Attractive Layout</div>
                  <div className="feature-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. </div>
                </div>
                <div className="column is-12-mobile is-3-tablet is-3-desktop feature-item">
                  <div className="feature-img">
                    <img src="icons/speech-bubble.png" alt="speech-bubble"/>
                  </div>
                  <div className="feature-title">Attractive Layout</div>
                  <div className="feature-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
