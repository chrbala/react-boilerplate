import Graphic from './Graphic'
var { Shape: _Shape } = createjs

export default class Shape extends Graphic {
	constructor() {
		super()
		this.shape = new _Shape(this.graphic)
	}

	mount() {
		super.mount()
		this.context.stage.addChild(this.shape)
	}

	init() {
		super.init()
		var { x, y } = this.props
		Object.assign(this.shape, {x, y})
	}

	update() {
		super.update()
	}
}