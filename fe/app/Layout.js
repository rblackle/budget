import React from 'react';
import ReactDom from 'react-dom';
import Header from "./Header";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

export default class Layout extends React.Component {

  render() {
    return (
      <div className='applicationPanel'>
        <Header/>

          <div className='body-wrapper'>
              <SidePanel/>
              <MainPanel/>
          </div>


      </div>
    );
  }
}