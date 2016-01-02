import * as myReducer from './myReducer'

function generateReducers(_reducers, _namespace) {
	var reducers = {}

	for (let name in _reducers) {
		let reducer = _reducers[name][name]
		let defaultState = _reducers[name].default || {}

		reducers[name] = (state = defaultState, action) => {
			let [ namespace, handlerName, type ] = action.type.split('/')

			if (namespace == _namespace && handlerName == name && reducer[type])
				return reducer[type](state, action.payload)

			return state
		}
	}
	
	return reducers
}

export default generateReducers({
	myReducer: { myReducer, default: true }
}, "boilerplate")