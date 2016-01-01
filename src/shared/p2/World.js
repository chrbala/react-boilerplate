import p2 from 'p2'

export default class World extends Component {
	getChildContext() {
		return {
			world: this.world
		}
	}

	componentWillMount() {
		this.world = new p2.World(this.props)
	}
}

World.childContextTypes = {
	world: React.PropTypes.any.isRequired
}

World.defaultProps = {
	gravity: [0, 9.82]
}