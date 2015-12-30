import Shape from './Shape'

export default class Circle extends Shape {
	componentDidUpdate() {
		super.componentDidUpdate()
		var { geometry } = this.props
		this.graphic.drawCircle(...geometry)
	}
}