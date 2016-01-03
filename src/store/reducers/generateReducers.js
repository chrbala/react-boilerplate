function generateReducer({reducer, defaultState, name, namespace}) {
	return (state = defaultState || {}, action) => {
		var [ _namespace, _name, type ] = action.type.split('/')

		if (namespace == _namespace && name == _name && reducer[type])
			return reducer[type](state, action.payload)

		return state
	}
}

export default (_reducers, namespace) => {
	var reducers = {}

	for (var name in _reducers) {
		var reducer = _reducers[name][name]
		var defaultState = _reducers[name].default
		reducers[name] = generateReducer({reducer, defaultState, name, namespace})
	}
	
	return reducers
}