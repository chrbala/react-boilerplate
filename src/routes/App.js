import { connect } from 'react-redux'
import * as actions from 'store/actions'
import { dispatch } from 'store'

import GameObject from 'shared/GameObject'
import Game from 'shared/Game'

import Circle from 'shared/Easel/Circle'

import Physics from 'physics'

var Context = props =>
	<Game width={window.innerWidth} height={window.innerHeight} GRAVITY="0" >
		<App {...props} />
	</Game>

class App extends GameObject {
	componentWillMount() {
		this.ball = Object.assign(
			this.context.physics.makeParticle(5, 100, 100), 
			{radius: 5}
		)
	}

	render() {
		var { 
			space, 
			left = false, 
			right = false,
			z: isRunning = false
		} = this.props.keys
		var { ball } = this
		var {
			radius,
			position,
			velocity
		} = ball
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
			ball.position.set(x, y)

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

export default connect(state => { 
	var keys = state.game.keys
	var ball = state.game.ball

	return {keys, ball}
})(Context)