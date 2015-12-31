import Physics from 'physics/src/Physics'

import Circle from 'shared/Easel/Circle'
import Particle from 'shared/Particle'

export default class Player extends Particle {
	componentWillMount() {
		super.componentWillMount()
	}

	render() {
		var { physics, keys } = this.context
		var { 
			space, 
			left = false, 
			right = false,
			z: isRunning = false
		} = keys
		var {
			radius,
			position: { x, y },
			force
		} = this.particle

		var ACCELERATION = 5

		var direction = right - left

		if (direction)
			force.addSelf(new Physics.Vector(ACCELERATION * direction, 0))

		return (
			<Circle 
				strokeStyle={[2]} 
				strokeColor={[0, 0, 0]} 
				fill={[space ? 255 : 0, 0, 0]}
				x={x}
				y={y}
				geometry={[0, 0, radius]}
			/>
		)
	}
}

