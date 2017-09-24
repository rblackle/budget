import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';

export default class SidePanel extends React.Component {

  render() {

    let sidePanelStyle = {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      top: '65px',
      bottom: '0px',
      left: '0px',
      width: '200px',
      backgroundColor: '#373737'
    };

    return (
      <div className='side-panel' style={sidePanelStyle}>
        <ul className="sidebar-nav">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </div>
    );
  }
}