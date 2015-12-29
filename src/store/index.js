import { compose, createStore, combineReducers } from 'redux'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import * as reducers from 'store/reducers'

var store = null

export const initWithHistory = history => {
	var reducer = combineReducers(
		...reducers, {
			routing: routeReducer
		}
	)

	var finalCreateStore = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore)

	store = finalCreateStore(reducer)

	syncReduxAndRouter(history, store)
}

export default store