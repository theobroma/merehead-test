import React, { Component } from 'react';
import ListAccount from './ListAccount';
import Features from './Features';
import Header from './Header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopover: false,
      showCommentForm:false
    };
  }

  render() {
    return (
      <div>
        <Header/>
       {/* <Features/>*/}
        <ListAccount/>
      </div>
    )
  }
}
