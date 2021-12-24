import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";
// import * as actions from "../actions";
import { changeAuth } from "../actions";
class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {this.renderButton()}
          {/* {this.props.auth ? (
            <button onClick={() => this.props.changeAuth(false)}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
          )} */}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/" exact element={<CommentList />} />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, changeAuth)(App);
