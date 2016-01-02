import generateReducers from './generateReducers'

import * as value from './value'

export default generateReducers({
	value: { value, default: true }
}, "app")