import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Route, IndexRoute, Link } from 'react-router'
import loadCreateJS from './.res/createjs.js'
loadCreateJS.call(global)

export default function(scope) {
	scope.React = React
	scope.Component = Component
	scope.findDOMNode = findDOMNode
	scope.Route = Route
	scope.Link = Link
	scope.IndexRoute = IndexRoute

	return scope
}