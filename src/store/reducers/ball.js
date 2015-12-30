export function INIT(state, {x, y}) {
	return {...state, x, y}
}

export function SET_SPEED(state, speed) {
	return {...state, speed}
}

export function MOVE(
	{x = 0, y = 0, speed = 1}, 
	{left = false, right = false, up = false, down = false}
) {
	var deltaX = (right || -left) * speed
	var deltaY = (down || -up) * speed

	x += deltaX
	y += deltaY

	return {x, y, speed}
}