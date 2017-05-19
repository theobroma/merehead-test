import React, { Component } from 'react';

export default class ListAccountItem extends Component {
  render() {
    const {id,name,surname,desc,photo} = this.props.item;
    return (
        <div className="list-item">
          <div className="columns middle-xs center-xs">
            <div className="column is-12-mobile is-4-tablet is-4-desktop">
              <div className="columns center-xs is-multiline list-item-top">
                <div className="column is-2-mobile is-3-tablet is-4-desktop list-item-label">
                  <label>
                    <input className="regular-radio big-radio" type="radio" value={id} checked={this.props.selectedOption === id} onChange={this.props.handleOptionChange}/>
                  </label>
                </div>
                <div className="column is-4-mobile is-9-tablet is-8-desktop center">
                  <img className="list-item-img" src={`/images/${photo}`} alt="" />
                </div>
                <div className="column is-6-mobile is-hidden-tablet list-item-name-wrap">
                  <div className="list-item-name">
                    <h3>{`${name} ${surname}`}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-12-mobile is-8-tablet is-8-desktop">
              <div className="list-item-name is-hidden-mobile">
                <h3>{`${name} ${surname}`}</h3>
              </div>
              <div className="list-item-desc">
                {desc}
              </div>
            </div>
          </div>
        </div>

    );
  }
}
