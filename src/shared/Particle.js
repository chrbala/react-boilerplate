import Physics from 'physics/src/Physics'

import GameObject from 'shared/GameObject'

export default class Particle extends GameObject {
	componentWillMount() {
		var { mass, x, y, ...rest } = this.props

		this.particle = Object.assign(
			this.context.physics.makeParticle(Number(mass), Number(x), Number(y)), 
			{...rest}
		)
	}
}

Particle.defaultProps = {
	mass: 1,
	x: 0,
	y: 0
}