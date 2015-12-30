import Shape from './Shape'

export default class Circle extends Shape {
	constructor() {
		super()
	}

	mount() {
		super.mount()
	}

	init() {
		super.init()
		var { geometry } = this.props
		this.graphic.drawCircle(...geometry)
	}

	update() {
		super.update()
	}
}