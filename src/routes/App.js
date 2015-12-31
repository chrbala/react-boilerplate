import { connect } from 'react-redux'
import * as actions from 'store/actions'
import { dispatch } from 'store'

import GameObject from 'shared/GameObject'
import Game from 'shared/Game'

import Circle from 'shared/Easel/Circle'

var Context = props =>
	<Game width={window.innerWidth} height={window.innerHeight} >
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
		var { space, left, right } = this.props.keys
		var { ball } = this
		var {
			radius,
			position: {
				x,
				y
			} 
		} = ball
		var { innerWidth: width, innerHeight: height } = window
		var [startX, startY] = [x, y]

		if (y > height + radius * 2)
			y = -radius * 2

		if (left)
			x -= 1
		if (right)
			x += 1

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