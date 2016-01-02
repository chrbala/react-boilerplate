import { compose, createStore, combineReducers } from 'redux'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import reducers from 'store/reducers'

var store

export function getStore() {
	return store
}

export function getState() {
	return store.getState(...arguments)
}

export function dispatch() {
	return store.dispatch(...arguments)
}

export const initWithHistory = history => {
	var reducer = combineReducers({
			app: combineReducers(reducers),
			routing: routeReducer
	})

	var finalCreateStore = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore)

	store = finalCreateStore(reducer)

	syncReduxAndRouter(history, store)
}