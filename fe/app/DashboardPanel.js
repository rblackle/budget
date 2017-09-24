import React from "react";
import BudgetProgressIndicator from "./BudgetProgressIndicator";

export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <BudgetProgressIndicator name="NEED" total="5000" used="4586" color="#1dc773"/>
        <BudgetProgressIndicator name="WANT" total="3000" used="1234" color="#731dc7"/>
        <BudgetProgressIndicator name="SAVE" total="2000" used="1508" color="#c7731d"/>
      </div>
    );
  }
}