var { Graphics } = createjs

export default class Stage extends Component {
	componentDidMount() {
		this.stage = new createjs.Stage(this.canvas)
		this.forceUpdate()
	}

	componentDidUpdate() {
		this.stage.update()
	}

	getChildContext() {
    return {stage: this.stage}
  }

	render() {
		var { children, width, height } = this.props
		var { stage } = this

		return (
			<div style={{position: 'fixed'}}>
				<canvas 
					width={width}
					height={height}
					ref={canvas => this.canvas = canvas}
				>
					{stage && children}
				</canvas>
			</div>
		)
	}
}

Stage.childContextTypes = {
  stage: React.PropTypes.any
}