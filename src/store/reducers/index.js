import generateReducers from './generateReducers'

import * as keys from './keys'

export default generateReducers({
	keys: { keys }
}, "app")