var { Ticker } = createjs

export default class Animation extends Component {
	constructor() {
		super()
		Ticker.addEventListener("tick", () => {
			if (!this.paused)
				::this.tick()
		})
	}
}