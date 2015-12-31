import { dispatch } from 'store'
import * as actions from 'store/actions'

import Physics from 'physics'
import Stage from 'shared/Easel/Stage'

export default class Game extends Component {
	getChildContext() {
    return {physics: this.physics}
  }

	componentWillMount() {
		var { GRAVITY } = this.props
		this.physics = new Physics(Number(GRAVITY))
		this.physics.onUpdate(::this.forceUpdate)

		window.onkeydown = e => dispatch(actions.keys.keydown(e))
		window.onkeyup = e => dispatch(actions.keys.keyup(e))
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
  physics: React.PropTypes.any.isRequired
}