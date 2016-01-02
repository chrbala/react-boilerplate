import Circle from 'shared/game/Circle'
import GameComponent from 'shared/game/GameComponent'

export default class Player extends GameComponent {
	componentWillUpdate() {
		var { 
			space, 
			left = false, 
			right = false
		} = this.context.game.keys
		var { force, velocity } = this.circle.body

		var direction = right - left
		var MAX_VELOCITY = 100
		var X = 0
		var Y = 1

		if (space && velocity[Y] < 0)
			force[Y] = 500
		if (direction && velocity[X] < MAX_VELOCITY)
			force[X] = 10 * direction
	}

	render() {
			var { 
				space, 
				left = false, 
				right = false
			} = this.context.game.keys

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