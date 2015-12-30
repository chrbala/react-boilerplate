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
		dispatch(actions.ball.init({x: 100, y: 100}))
		dispatch(actions.ball.setSpeed(5))
		this.count = 0
	}

	tick() {
		var { keys } = this.props
		dispatch(actions.ball.move(keys))
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
				y
			}
		} = this.props

		return (
			<Game width={width} height={height} >
				<Circle 
					strokeStyle={[2]} 
					strokeColor={[0, 0, 0]} 
					fill={[space ? 255 : 0, 0, 0]}
					x={x}
					y={y}
					geometry={[0, 0, 5]}
				/>
			</Game>
		)
	}
}

App.defaultProps = {
	width: 400,
	height: 300
}

export default connect(state => { 
	var keys = state.game.keys
	var ball = state.game.ball || {}

	return {keys, ball}
})(App)