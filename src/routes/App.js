import Game from 'shared/Game'
import Stage from 'shared/Easel/Stage'
import Circle from 'shared/Easel/Circle'

export default class App extends Component {
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
		var { width, height } = this.props
		var { x, y } = this.state

		return (
			<div>
				<Game>
					<Stage width={width} height={height} >
						<Circle 
							strokeStyle={[x / 20]} 
							strokeColor={[0, 0, 0]} 
							fill={[255, 0, 0]}
							x="100"
							y="100"
							geometry={[0, 0, x]}
						/>
					</Stage>
				</Game>
				<input 
					type="range" 
					onChange={::this.handleChange} 
					name="points" 
					min="0" 
					value={x}
					max={width} 
				/>
			</div>
		)
	}
}

App.defaultProps = {
	width: 400,
	height: 300
}