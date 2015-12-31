import * as actions from 'store/actions'
import { dispatch } from 'store'

import Circle from 'shared/Easel/Circle'
import Particle from 'shared/Particle'

export default class Player extends Particle {
	componentWillMount() {
		super.componentWillMount()
	}

	render() {
		var { 
			space, 
			left = false, 
			right = false,
			z: isRunning = false
		} = this.context.keys
		var {
			radius,
			position,
			velocity
		} = this.particle
		var { innerWidth: width, innerHeight: height } = window
		var [x, y] = [position.x, position.y]
		var [velocityX, velocityY] = [velocity.x, velocity.y]

		var MAX_VELOCITY = isRunning ? 10 : 5
		var ACCELERATION = isRunning ? 1.4 : .7
		var DECELERATION = isRunning ? .1 : .5

		var LEFT = -1
		var RIGHT = 1

		var buttonDirection = right - left
		var velocityDirection = (velocity.x > 0) - (velocity.x < 0)

		if (y > height + radius * 2)
			y = -radius * 2

		var atMaxVelocity = Math.abs(velocity.x) >= MAX_VELOCITY

		// disallow greater velocities than max
		if (buttonDirection == velocityDirection && atMaxVelocity)
			velocityX = MAX_VELOCITY * buttonDirection

		// accelerate from standstill
		else if (buttonDirection && !velocityDirection)
			velocityX = buttonDirection * ACCELERATION

		// decelerate if no button pressed
		else if (velocityDirection && !buttonDirection)
			velocityX = velocity.x * DECELERATION

		// accelerate more in current direction
		else if (buttonDirection == velocityDirection)
			velocityX += buttonDirection * ACCELERATION 

		// reverse direction
		else if (buttonDirection && velocityDirection)
			velocityX += velocity.x * -1

		// update velocity if it has changed
		if (velocityX != velocity.x || velocityY != velocity.y)
			velocity.set(velocityX, velocityY)

		// update position if it has changed
		if (x != position.x || y != position.y)
			position.set(x, y)

		return (
			<Circle 
				strokeStyle={[2]} 
				strokeColor={[0, 0, 0]} 
				fill={[space ? 255 : 0, 0, 0]}
				x={x}
				y={y}
				geometry={[0, 0, radius]}
			/>
		)
	}
}