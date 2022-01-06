import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    //Component rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //component updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auh: state.auth };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
