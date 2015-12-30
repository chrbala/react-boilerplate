import { connect } from 'react-redux'

import Game from 'shared/Game'
import Stage from 'shared/Easel/Stage'
import Circle from 'shared/Easel/Circle'

class App extends Component {
	constructor() {
		super()

		this.state = {
			x: 100,
			y: 100
		}
	}

	handleChange(e) {
		this.setState({x: e.target.value})
	}
	
	render() {
		var { 
			width, 
			height, 
			keys: {
				space
			} 
		} = this.props
		var { x, y } = this.state

		return (
			<Game width={width} height={height} >
				<Circle 
					strokeStyle={[2]} 
					strokeColor={[0, 0, 0]} 
					fill={[space ? 255 : 0, 0, 0]}
					x="100"
					y="100"
					geometry={[0, 0, x]}
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
	return {keys}
})(App)