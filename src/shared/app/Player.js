import Circle from 'shared/game/Circle'
import GameComponent from 'shared/game/GameComponent'

export default class Player extends GameComponent {
	componentWillUpdate() {
		var { keys } = this.context
		var { 
			space, 
			left = false, 
			right = false
		} = keys
		var { force, velocity } = this.circle.body

		var direction = right - left
		var MAX_VELOCITY = 100
		var X = 0
		var Y = 1

		if (space && velocity[Y] > 0)
			velocity[Y] = 200 * -1
		if (direction && velocity[X] < MAX_VELOCITY)
			force[X] += 100 * direction
	}

	render() {
			var { keys } = this.context
			var { 
				space, 
				left = false, 
				right = false
			} = keys

		return (
			<Circle 
				{...this.props}
				strokeStyle={[2]} 
				strokeColor={[0, 0, 0]} 
				fill={[space ? 255 : 0, 0, 0]}
				ref={ref => this.circle = ref}
				mass="1"
			/>
		)
	}
}