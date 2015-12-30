import Graphic from './Graphic'
var { Shape: _Shape } = createjs

export default class Shape extends Graphic {
	constructor() {
		super()
		this.shape = new _Shape(this.graphic)
	}

	mount() {
		super.mount()
		var { stage } = this.props
		stage.addChild(this.shape)
	}

	init() {
		super.init()
	}

	update() {
		super.update()
		var { x, y } = this.props
		Object.assign(this.shape, {x, y})
	}
}