import { connect } from 'react-redux'
import * as actions from 'store/actions'
import { dispatch } from 'store'

import Animation from 'shared/Animation'
import Game from 'shared/Game'
import Stage from 'shared/Easel/Stage'
import Circle from 'shared/Easel/Circle'

class App extends Animation {
	constructor() {
		super()
		dispatch(actions.ball.setCoordinates({x: 100, y: 100}))
		dispatch(actions.ball.setSpeed(5))
		dispatch(actions.ball.setSize(5))
	}

	tick() {
		var { 
			keys, 
			ball: {
				size
			} 
		} = this.props
		dispatch(actions.ball.move(keys))

		if (keys.space)
			dispatch(actions.ball.grow(1))
		else if (size > 5)
			dispatch(actions.ball.grow(-1))
	}

	render() {
		var { 
			width, 
			height, 
			keys: {
				space
			},
			ball: {
				x,
				y,
				size
			}
		} = this.props

		return (
			<Game width={window.innerWidth} height={window.innerHeight} >
				<Circle 
					strokeStyle={[2]} 
					strokeColor={[0, 0, 0]} 
					fill={[space ? 255 : 0, 0, 0]}
					x={x}
					y={y}
					geometry={[0, 0, size]}
				/>
			</Game>
		)
	}
}

export default connect(state => { 
	var keys = state.game.keys
	var ball = state.game.ball

	return {keys, ball}
})(App)