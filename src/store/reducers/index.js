import * as myReducer from './myReducer'

function generateReducer(_name, _namespace, defaultState) {
	return (state = defaultState || {}, action) => {
		var [ namespace, name, type ] = action.type.split('/')

		if (namespace == _namespace && name == _name && reducer[type])
			return reducer[type](state, action.payload)

		return state
	}
}

function generateReducers(_reducers, namespace) {
	var reducers = {}

	for (var name in _reducers) {
		var reducer = _reducers[name][name]
		var defaultState = _reducers[name].default
		reducers[name] = generateReducer(name, namespace, defaultState)
	}
	
	return reducers
}

export default generateReducers({
	myReducer: { myReducer, default: true }
}, "boilerplate")