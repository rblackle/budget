import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch} from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import TransactionsPanel from "./TransactionsPanel";

export default class MainPanel extends React.Component {

  render() {

    let mainPanelStyle = {
      marginLeft: '300px',
      minWidth: '550px',
      maxWidth: '1150px'
    };

    return (
      <div className='main-panel' style={mainPanelStyle}>
        <Switch>
          <Route exact path='/' component={DashboardPanel}/>
          <Route path='/dashboard' component={DashboardPanel}/>
          <Route path='/transactions' component={TransactionsPanel}/>
        </Switch>
      </div>
    );
  }
}