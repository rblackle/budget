import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch} from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import TransactionsPanel from "./TransactionsPanel";
import PageShell from "./PageShell";

export default class MainPanel extends React.Component {

  render() {

    let mainPanelStyle = {
      marginLeft: '200px',
      minWidth: '550px',
      maxWidth: '1150px',
      padding: '10px'
    };

    return (
      <div className='main-panel' style={mainPanelStyle}>
        <Switch>
          <Route exact path='/' component={PageShell(DashboardPanel)}/>
          <Route path='/dashboard' component={PageShell(DashboardPanel)}/>
          <Route path='/transactions' component={PageShell(TransactionsPanel)}/>
        </Switch>
      </div>
    );
  }
}