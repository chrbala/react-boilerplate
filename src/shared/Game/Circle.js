import p2 from 'p2'

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
	radius: 1
}