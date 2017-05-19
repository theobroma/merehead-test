import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import ListAccountItem from './ListAccountItem';
import { loadUsers } from './actions/usersActions';

class ListAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption:"1"
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange (changeEvent) {
    console.log('handleOptionChange');
    console.log('changeEvent.target.value',changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <div className="column is-12 center">
                <h2 className="section-title">List account</h2>
              </div>
              <form>
                {this.props.users.data.map(item =>
                  (<ListAccountItem
                   key={shortid.generate()}
                   item={item}
                   selectedOption={this.state.selectedOption}
                   handleOptionChange={this.handleOptionChange}
                   />)
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps,{loadUsers})(ListAccount);
