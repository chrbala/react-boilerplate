import Shape from 'shared/Easel/Shape'

export default class PhysicalShape extends Shape {
	constructor() {
		super()
	}

	mount() {
		super.mount()
	}

	init() {
		super.init()
	}

	update() {
		super.update()
		var { shape, body } = this
		var [ x, y ] = body.position

		shape.set({
			x,
			y
		})
	}
}

PhysicalShape.defaultProps = {
	radius: 1
}