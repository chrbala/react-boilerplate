import { connect } from 'react-redux'
import MainLoop from 'mainloop.js'

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

	start() {
		MainLoop.setUpdate(() => this.world.step(1 / 20)).setDraw(() => this.forceUpdate()).start()
	}

	stop() {
		MainLoop.stop()
	}

	componentDidMount() {
		window.onkeydown = e => dispatch(actions.keys.keydown(e))
		window.onkeyup = e => dispatch(actions.keys.keyup(e))
		this.start()
	}

	componentWillUpdate() {
		var { esc } = this.props.keys
		if (esc)
			this.stop()
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