import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

export default function(scope) {
	scope.React = React
	scope.Route = Route
	scope.Link = Link
	scope.IndexRoute = IndexRoute

	return scope
}