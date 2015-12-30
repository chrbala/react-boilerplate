var { Graphics } = createjs

export default class Stage extends Component {
	componentDidUpdate() {
		this.stage.update()
	}

	componentDidMount() {
		this.stage = new createjs.Stage(this.canvas)
		this.forceUpdate()
	}

	render() {
		var { children } = this.props
		var { stage } = this

		return (
			<canvas ref={canvas => this.canvas = canvas}>
				{stage && React.Children.map(children, child =>
					React.cloneElement(child, { stage })
				)}
			</canvas>
		)
	}
}