import React, { Component } from "react";
import Module from "../Module/Module";
import "./ModuleList.css";

export default class ModuleList extends Component {
  state = { error: null };

  render() {
    return (
      <div className="module-list">
        <Module
          title="Building Operations"
          description="Preventative Maintenance On Demand"
        ></Module>
        <Module
          title="Workplace Space Management"
          description="Space Densification and Utilization"
        ></Module>
        <Module
          title="Asset and Inventory Management"
          description="Inventory Tracking Software"
        ></Module>
        <Module
          title="Work Order Management"
          description="Work Order Software"
        ></Module>
        <Module
          title="Lease Management"
          description="Lease Tracking Software"
        ></Module>
        <Module
          title="Room Reservation Software"
          description="Reserve and Monitor Rooms"
        ></Module>
      </div>
    );
  }
}
