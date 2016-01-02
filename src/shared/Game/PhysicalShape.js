import Shape from 'shared/Easel/Shape'
import { getScale } from 'packages/lib'

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
		
		var scale = getScale(this.context.game)
		x *= scale
		y *= scale * -1
		y += this.context.game.height

		shape.set({
			x,
			y
		})
	}
}

PhysicalShape.defaultProps = {
	...Shape.defaultProps,
	radius: 1
}

PhysicalShape.contextTypes = {
	...Shape.contextTypes,
  game: React.PropTypes.any.isRequired
}