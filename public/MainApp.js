
var React = require('react'); //required for webpack to understand
var ReactDOM = require('react-dom'); //required for webpack to understand
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var LandingPage = require('LandingPage');
var WeatherMain = require('WeatherMain');
var Login = require('Login');
var Register = require('Register');
var ContactUs = require('ContactUs');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={LandingPage}>
        <Route path="Register" component={Register} />
        <Route path="ContactUs" component={ContactUs} />
        <Route path="Login" component={Login} />
        <IndexRoute component={WeatherMain} />
    </Route>
    </Router>,
    document.getElementById('app')
);