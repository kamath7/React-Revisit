import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  componentDidCatch() {}
  render() {
    return this.props.children;
  }
}
