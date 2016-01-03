import * as lib from 'packages/lib'

export default (actions, namespace) => {
	var out = {}
	namespace = namespace ? namespace + '/' : ''

	actions.forEach(m => {
		if (typeof m == 'string')
			out[m] = function(payload) {
				return {
					type: namespace + lib.toUnderscore(m),
					payload
				}
			}
		else
		 out[m.name] = function(payload) {
		 	var action = m.action(payload)
		 	action.type = namespace + action.type

		 	return action
		}
	})

	return out
}