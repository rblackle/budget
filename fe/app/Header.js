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
      fontSize: '25px'
    };

    return (
      <div className='header' style={headerStyle}>
        <div className='title' style={titleStyle}>
          <span>fifty</span><span>thirty</span><span>twenty</span>
        </div>
      </div>
    );
  }
}