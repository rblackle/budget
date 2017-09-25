import React from 'react';
import ReactDom from 'react-dom';

export default class Header extends React.Component {

  render() {

    let headerStyle = {
      backgroundColor: '#373737',
      height: '65px'
    };

    let titleStyle = {
      color: '#FFFFFF',
      fontSize: '25px',
      padding: '5px'
    };

    let fiftyStyle = {
      color: '#1dc773'
    };

    let thirtyStyle = {
      color: "#731dc7"
    }

    let twentyStyle = {
      color: "#c7731d"
    };

    return (
      <div className='header' style={headerStyle}>
        <div className='title' style={titleStyle}>
          <span style={fiftyStyle}>fifty</span><span style={thirtyStyle}>thirty</span><span style={twentyStyle}>twenty</span>
        </div>
      </div>
    );
  }
}