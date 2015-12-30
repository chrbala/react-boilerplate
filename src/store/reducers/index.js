import * as keys from './keys'

function generateReducers(_reducers, _namespace) {
	var reducers = {}

	for (let name in _reducers) {
		let reducer = _reducers[name][name]
		let defaultState = _reducers[name].default || {}

		reducers[name] = (state = defaultState, action) => {
			var [ namespace, handlerName, type ] = action.type.split('/')

			if (namespace == _namespace && handlerName == name && reducer[type])
				return reducer[type](state, action.payload)

			if (namespace.charAt(0) != '@')
				console.warn(namespace + '/' + handlerName + '/' + type + 'is not set')

			return state
		}
	}
	
	return reducers
}

export default generateReducers({
	keys: { keys }
}, "game")