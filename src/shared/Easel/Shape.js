import Graphic from './Graphic'
var { Shape: _Shape } = createjs

export default class Shape extends Graphic {
	constructor() {
		super()
		this.shape = new _Shape(this.graphic)
	}

	init() {
		super.init()
	}

	componentDidMount() {
		super.componentDidMount()
		var { stage } = this.props
		stage.addChild(this.shape)
	}

	componentDidUpdate() {
		super.componentDidUpdate()
		var { x, y } = this.props
		Object.assign(this.shape, {x, y})
	}
}