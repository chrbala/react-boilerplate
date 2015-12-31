import { dispatch } from 'store'
import * as actions from 'store/actions'

import Physics from 'physics'
import Stage from 'shared/Easel/Stage'

export default class Game extends Component {
	constructor() {
		super()

		this.physics = new Physics(.1)
		this.physics.onUpdate(::this.forceUpdate)
	}

	getChildContext() {
    return {physics: this.physics}
  }

	componentWillMount() {
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