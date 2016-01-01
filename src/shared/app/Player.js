import Circle from 'shared/game/Circle'
import GameComponent from 'shared/game/GameComponent'

export default class Player extends GameComponent {
	render() {
		var { keys } = this.context
		var { 
			space, 
			left = false, 
			right = false,
			z: isRunning = false
		} = keys

		return (
			<Circle 
				{...this.props}
				strokeStyle={[2]} 
				strokeColor={[0, 0, 0]} 
				fill={[space ? 255 : 0, 0, 0]}
				mass="1"
			/>
		)
	}
}