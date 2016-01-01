import p2 from 'p2'

import PhysicalShape from './PhysicalShape'

export default class Rectangle extends PhysicalShape {
	constructor() {
		super()
	}

	mount() {
		super.mount()
		var { position: [x, y], position: lowerBound, width, height } = this.props
		var upperBound = [x + Number(width), y + Number(height)]
		var AABB = new p2.AABB({lowerBound, upperBound})
		this.body.addShape(new p2.Line(AABB))
	}

	init() {
		super.init()
		var { width, height } = this.props
		this.shape.graphics.drawRect(0, 0, width, height)
	}

	update() {
		super.update()
	}

	render() {
		return <div />
	}
}

Rectangle.defaultProps = {
	x: 0,
	y: 0,
	width: 100,
	height: 100
}