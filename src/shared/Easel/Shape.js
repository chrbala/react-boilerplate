import Body from 'shared/p2/Body'
var { Shape: _Shape, Graphics } = createjs

export default class Shape extends Body {
	constructor() {
		super()
		this.shape = new _Shape()
	}

	mount() {
		super.mount()
		this.context.stage.addChild(this.shape)
	}

	init() {
		super.init()
		var {
			strokeColor,
			strokeStyle,
			fill
		} = this.props

		this.shape.graphics
			.setStrokeStyle(...strokeStyle)
			.beginStroke(Graphics.getRGB(...strokeColor))
			.beginFill(Graphics.getRGB(...fill))
	}

	update() {
		super.update()
	}
}

Shape.contextTypes = {
	...Body.contextTypes,
  stage: React.PropTypes.any.isRequired
}