var { Graphics } = createjs

export default class Graphic extends Component {
	constructor() {
		super()
		this.graphic = new Graphics()
			.setStrokeStyle(1)
			.beginStroke(createjs.Graphics.getRGB(0, 0, 0))
			.beginFill(createjs.Graphics.getRGB(255, 0, 0))
			.drawCircle(0, 0, 3)
	}
}