import React, { Component } from "react";
import "./Offering.css";

export default class Offering extends Component {
  state = { error: null };

  render() {
    return (
      <div className="offering">
        <p>{this.props.description}</p>
      </div>
    );
  }
}
