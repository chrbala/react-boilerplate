import { connect } from 'react-redux'
import * as actions from 'store/actions'
import { dispatch } from 'store'

import Game from 'shared/Game'
import Stage from 'shared/Easel/Stage'
import Circle from 'shared/Easel/Circle'

import Physics from 'physics'

class App extends Component {
	constructor() {
		super()

		this.physics = new Physics(.1)
		this.physics.onUpdate(::this.tick)
	}

	componentWillMount() {
		this.ball = Object.assign(
			this.physics.makeParticle(5, 100, 100), 
			{radius: 5}
		)

		this.physics.toggle()
	}

	tick() {
		var { ball } = this
		var { radius } = ball
		var { innerWidth: width, innerHeight: height } = window

		if (ball.position.y > height + radius * 2)
      ball.position.set(ball.position.x, -radius * 2)

		this.forceUpdate()
	}

	render() {
		var { space } = this.props.keys
		var { 
			ball: {
				position: {
					x,
					y
				},
				radius
			}
		} = this

		return (
			<Game width={window.innerWidth} height={window.innerHeight} >
				<Circle 
					strokeStyle={[2]} 
					strokeColor={[0, 0, 0]} 
					fill={[space ? 255 : 0, 0, 0]}
					x={x}
					y={y}
					geometry={[0, 0, radius]}
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