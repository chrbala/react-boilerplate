export function SET_SIZE(state, size) {
	return {...state, size}
}

export function GROW({size, ...rest}, amount = 1) {
	size += amount
	return {...rest, size}
}