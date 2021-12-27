import React, { Component } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }
  return ComposedComponent;
};
