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
			position: {
				x,
				y
			},
			velocity
		} = ball
		var { innerWidth: width, innerHeight: height } = window
		var [startX, startY] = [x, y]

		if (y > height + radius * 2)
			y = -radius * 2

		var MAX = isRunning ? 10 : 5
		var ACCELERATION = isRunning ? 1.4 : .7
		var DECELERATION = isRunning ? .1 : .5

		var atMaxVelocity = right && velocity.x >= MAX
			|| left && velocity.x <= -MAX

		if (atMaxVelocity) {}
		else if (left || right)
			velocity.addSelf(new Physics.Vector((right - left) * ACCELERATION))
		else
			velocity.set(velocity.x * DECELERATION, velocity.y)

		if (x != startX || y != startY)
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