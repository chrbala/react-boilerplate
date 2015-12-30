import Graphic from './Graphic'
var { Shape: _Shape } = createjs

export default class Shape extends Graphic {
	constructor() {
		super()
		this.shape = new _Shape(this.graphic)
		this.shape.x = 100
		this.shape.y = 100
	}

	componentDidMount() {
		var { stage } = this.props
		stage.addChild(this.shape)
	}

	render() {
		return <div />
	}
}