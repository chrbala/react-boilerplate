var { Graphics } = createjs

export default class Stage extends Component {
	constructor() {
		super()
		this.defaultProps = {
			children: []
		}
	}

	componentDidMount() {
		this.stage = new createjs.Stage(this.canvas)
		this.stage.update()
	}

	componentDidUpdate() {
		this.stage.update()
	}

	handleClick(e) {
		this.forceUpdate()
	}

	render() {
		var { children } = this.props
		var { stage } = this

		return (
			<canvas 
				onClick={::this.handleClick} 
				ref={canvas => this.canvas = canvas}
			>
				{stage && React.Children.map(children, child =>
					React.cloneElement(child, { stage })
				)}
			</canvas>
		)
	}
}