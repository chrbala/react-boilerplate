import keycode from 'keycode'

export function KEYDOWN(state, event) {
	return {...state, [keycode(event)]: true}
}

export function KEYUP(state, value) {
	return {...state, [keycode(event)]: false}
}