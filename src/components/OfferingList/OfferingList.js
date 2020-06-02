import React, { Component } from "react";
import Offering from "../Offering/Offering";
import "./OfferingList.css";

export default class OfferingList extends Component {
  state = { error: null };

  render() {
    return (
      <div className="offering-list">
        <Offering description="Enterprise Asset Management (EAM)"></Offering>
        <Offering description="Integrated Workplace Management System (IWMS)"></Offering>
        <Offering description="Computerized Maintenance Management System (CMMS)"></Offering>
        <Offering description="Point Solutions"></Offering>
      </div>
    );
  }
}
