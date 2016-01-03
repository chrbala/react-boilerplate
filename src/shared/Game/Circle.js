import p2 from 'p2'
import { getScale } from 'packages/lib'

import PhysicalShape from './PhysicalShape'

export default class Circle extends PhysicalShape {
	constructor() {
		super()
	}

	mount() {
		super.mount()
		this.body.addShape(new p2.Circle(this.props))
	}

	init() {
		super.init()
		var { radius } = this.props
		radius *= getScale(this.context.app)

		this.shape.graphics.drawCircle(0, 0, radius)
	}

	update() {
		super.update()
	}

	render() {
		return <div />
	}
}

Circle.defaultProps = {
	...PhysicalShape.defaultProps,
	radius: 1
}