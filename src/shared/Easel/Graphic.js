var { Graphics } = createjs

export default class Graphic extends Component {
	componentDidMount() {
		var {
			strokeColor,
			strokeStyle,
			fill
		} = this.props

		this.graphic = new Graphics()
			.setStrokeStyle(strokeStyle)
			.beginStroke(createjs.Graphics.getRGB(...strokeColor))
			.beginFill(createjs.Graphics.getRGB(...fill))
			.drawCircle(0, 0, 3)
	}

	render() {
		return <div />
	}
}