export function SET_COORDINATES(state, {x, y}) {
	return {...state, x, y}
}

export function SET_SPEED(state, speed) {
	return {...state, speed}
}

export function MOVE(
	{x = 0, y = 0, speed = 1, ...rest}, 
	{left = false, right = false, up = false, down = false}
) {
	var deltaX = (right || -left) * speed
	var deltaY = (down || -up) * speed

	x += deltaX
	y += deltaY

	return {...rest, x, y, speed}
}

export function SET_SIZE(state, size) {
	return {...state, size}
}

export function GROW({size, ...rest}, amount = 1) {
	size += amount
	return {...rest, size}
}