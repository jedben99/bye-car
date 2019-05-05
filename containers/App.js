import React, { Component } from "react";
import InputPreview from "../components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "../actions/message";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";

class App extends React.Component {
  _onChange = value => {
    this.props.dispatch(setMessage(value));
  };

  render() {
    const { message } = this.props.messageReducer;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default connect(state => state)(App);
