import { connect } from 'react-redux'
var { Ticker } = createjs
var FRAMERATE = 60
createjs.Ticker.framerate = FRAMERATE

import { dispatch } from 'store'
import * as actions from 'store/actions'

import World from 'shared/p2/World'
import Stage from 'shared/Easel/Stage'

export default class Game extends World {
	getChildContext() {
		return {
			...super.getChildContext(),
			keys: this.props.keys
		}
	}

	animate() {
		requestAnimationFrame(() => {
			requestAnimationFrame(::this.animate)
			this.world.step(1 / 5)
			this.forceUpdate()
		})
	}

	componentDidMount() {
		window.onkeydown = e => dispatch(actions.keys.keydown(e))
		window.onkeyup = e => dispatch(actions.keys.keyup(e))
		this.animate()
	}

	render() {
		var { children, ...rest } = this.props
		return (
			<Stage {...rest} >
				{children}
			</Stage>
		)
	}
}

Game.childContextTypes = {
	...World.childContextTypes,
	keys: React.PropTypes.any.isRequired
}

export default connect(state => { 
	var keys = state.game.keys
	return {keys}
})(Game)