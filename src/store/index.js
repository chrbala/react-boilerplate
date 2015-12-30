import { compose, createStore, combineReducers } from 'redux'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import reducers from 'store/reducers'

export let store = null

export const initWithHistory = history => {
	var reducer = combineReducers({
			game: combineReducers(reducers),
			routing: routeReducer
	})

	var finalCreateStore = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore)

	store = finalCreateStore(reducer)

	syncReduxAndRouter(history, store)
}