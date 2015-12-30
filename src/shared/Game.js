import { store } from 'store'
import * as actions from 'store/actions'

export default class Game extends Component {
	componentDidMount() {
		window.onkeydown = e => store.dispatch(actions.keys.keydown(e))
		window.onkeyup = e => store.dispatch(actions.keys.keyup(e))
	}

	render() {
		var { children } = this.props
		return (
			<div>
				{children}
			</div>
		)
	}
}