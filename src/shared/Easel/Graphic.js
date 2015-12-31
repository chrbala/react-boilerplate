import GameObject from 'shared/GameObject'
var { Graphics } = createjs

export default class Graphic extends GameObject {
	constructor() {
		super()
		this.graphic = new Graphics()
	}

	mount() {

	}

	init() {
		var {
			strokeColor,
			strokeStyle,
			fill
		} = this.props

		this.graphic
			.setStrokeStyle(...strokeStyle)
			.beginStroke(createjs.Graphics.getRGB(...strokeColor))
			.beginFill(createjs.Graphics.getRGB(...fill))
	}

	update() {
		this.graphic.clear()
		this.init()
	}

	componentDidMount() {
		this.mount()
		this.init()
	}

	componentDidUpdate() {
		this.update()
	}

	render() {
		return <div />
	}
}