import React, { Component } from 'react';
import './ErrorBoundry.scss';
export interface ErrorBoundryProps {}

export interface ErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error__holder">
          Something wrong!
          <strong>Please try later</strong>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
