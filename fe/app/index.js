import React from 'react';
import ReactDOM from 'react-dom';

var greeter = require('./greeter');

var greeting = greeter.greet();

if (typeof document !== 'undefined') {
  var apiEndpoint = 'http://localhost:8888/api/greetings';
  var el = document.createElement('h1');

  // "/webpack" is actually a parameter
  fetch(apiEndpoint + '/webpack').then(function(response) {
    return response.json();
  }).then(function(obj) {
    el.innerHTML = greeting + '<br>' + obj.content + '<br>At ' + obj.time;
    document.body.appendChild(el);
  }).catch(function(err) {
    el.innerHTML = 'oh no…';
    document.body.appendChild(el);
  });
} else {
  console.log(greeting);
}

ReactDOM.render(
<div className="container">
  <form className="form-signin">
  <h2 className="form-signin-heading">Please sign in</h2>
<label htmlFor="inputEmail" className="sr-only">Email address</label>
<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
  <label htmlFor="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>
  </div>,
  document.getElementById("app")
);

