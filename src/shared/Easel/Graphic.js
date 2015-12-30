var { Graphics } = createjs

export default class Graphic extends Component {
	constructor() {
		super()
		this.graphic = new Graphics()
	}

	init() {
		var {
			strokeColor,
			strokeStyle,
			fill
		} = this.props

		this.graphic
			.setStrokeStyle(strokeStyle)
			.beginStroke(createjs.Graphics.getRGB(...strokeColor))
			.beginFill(createjs.Graphics.getRGB(...fill))
	}

	componentDidMount() {
		this.init()
	}

	componentDidUpdate() {
		this.graphic.clear()
		this.init()
	}

	render() {
		return <div />
	}
}