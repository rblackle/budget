import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";

if (typeof document !== 'undefined') {
  var apiEndpoint = 'http://localhost:8888/api/greetings';

  // "/webpack" is actually a parameter
  fetch(apiEndpoint + '/webpack').then(function(response) {
    return response.json();
  }).then(function(obj) {
    //let param = obj.time;
    ReactDOM.render(
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      ,
      document.getElementById("app")
    );
  }).catch(function(err) {
    var el = document.createElement('h1');
    el.innerHTML = 'oh no…' + err;
    document.body.appendChild(el);
  });
}
