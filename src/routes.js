"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
<Route name="app" path="/" handler={require('./components/app')}>
	<DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
	<Route name="chordmap" handler={require('./components/chordmap/ChordMapPage')}></Route>
	<Route name="about" handler={require('./components/about/aboutPage')}></Route>
</Route>
);

module.exports = routes;
