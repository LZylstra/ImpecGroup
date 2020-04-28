import React, { Component } from "react";
import "./Module.css";

export default class Module extends Component {
  state = { error: null };

  render() {
    return (
      <div className="module">
        <h4 className="blue bold">{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
