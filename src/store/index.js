import { compose, createStore, combineReducers } from 'redux'

import * as reducers from 'store/reducers'

var reducer = combineReducers(reducers)

var finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default finalCreateStore(reducer)