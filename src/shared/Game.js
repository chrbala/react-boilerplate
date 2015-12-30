import { store } from 'store'
import * as actions from 'store/actions'

import Stage from 'shared/Easel/Stage'

export default class Game extends Component {
	componentDidMount() {
		window.onkeydown = e => store.dispatch(actions.keys.keydown(e))
		window.onkeyup = e => store.dispatch(actions.keys.keyup(e))
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