import { connect } from 'react-redux'
import { dispatch } from 'store'
import * as actions from 'store/actions'

import Physics from 'physics'
import Stage from 'shared/Easel/Stage'

export default class Game extends Component {
	getChildContext() {
    return {
    	physics: this.physics,
    	keys: this.props.keys
    }
  }

	componentWillMount() {
		var { GRAVITY } = this.props
		this.physics = new Physics(Number(GRAVITY))
		this.physics.onUpdate(::this.forceUpdate)

		window.onkeydown = e => dispatch(actions.keys.keydown(e))
		window.onkeyup = e => dispatch(actions.keys.keyup(e))
		this.physics.toggle()
	}

	componentWillUnmount() {
		this.physics.toggle()
	}

	render() {
		var { children, ...rest } = this.props
		return (
			<Stage {...rest}>
				{children}
			</Stage>
		)
	}
}

Game.childContextTypes = {
  physics: React.PropTypes.any.isRequired,
  keys: React.PropTypes.any.isRequired
}

export default connect(state => { 
	var keys = state.game.keys
	return {keys}
})(Game)