import Shape from './Shape'

export default class Circle extends Shape {
	constructor() {
		super()
	}

	init() {
		super.init()
		var { geometry } = this.props
		this.graphic.drawCircle(...geometry)
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentDidUpdate() {
		super.componentDidUpdate()
	}
}