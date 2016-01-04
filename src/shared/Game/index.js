import { connect } from 'react-redux'
import MainLoop from 'mainloop.js'

import { dispatch } from 'store'
import Keys from 'store/actions/keys'

import World from 'shared/p2/World'
import Stage from 'shared/Easel/Stage'

export default class Game extends World {
	constructor() {
		super()
		window.onkeydown = e => dispatch(Keys.keydown(e))
		window.onkeyup = e => dispatch(Keys.keyup(e))
	}

	getChildContext() {
		return {
			...super.getChildContext(),
			app: this.props
		}
	}

	start() {
		MainLoop.setUpdate(() => this.world.step(1 / MainLoop.getFPS() * 2)).setDraw(() => this.forceUpdate()).start()
	}

	stop() {
		MainLoop.stop()
	}

	componentDidMount() {
		this.start()
	}

	componentWillUnmount() {
		this.stop()
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
	app: React.PropTypes.any.isRequired
}

export default connect(state => {
	var keys = state.app.keys
	return {keys}
})(Game)