import Graphic from './Graphic'
var { Shape: _Shape } = createjs

export default class Shape extends Graphic {
	componentDidMount() {
		super.componentDidMount()

		var { x, y } = this.props
		this.shape = Object.assign(new _Shape(this.graphic), {x, y})

		var { stage } = this.props
		stage.addChild(this.shape)
	}

	componentDidUpdate() {
		var { x, y } = this.props
		Object.assign(this.shape, {x, y})
	}
}