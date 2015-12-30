import Stage from 'shared/Easel/Stage'
import Shape from 'shared/Easel/Shape'

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
				<Stage width={width} height={height} >
					<Shape 
						strokeColor="1" 
						strokeStyle={[0, 0, 0]} 
						fill={[255, 0, 0]}
						x={x}
						y={y}
					/>
				</Stage>
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