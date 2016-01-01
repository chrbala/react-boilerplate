import p2 from 'p2'

export default class Body extends Component {
	constructor() {
		super()
	}

	mount() {
		this.body = new p2.Body(this.props)
		this.context.world.addBody(this.body)
	}

	init() {

	}

	update() {

	}

	componentDidMount() {
		this.mount()
		this.init()
	}

	componentDidUpdate(prevProps) {
		this.update(prevProps)
	}
}

Body.contextTypes = {
  world: React.PropTypes.any.isRequired
}

Body.defaultProps = {
	mass: 1,
	position: [0, 0]
}