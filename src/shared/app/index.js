import Game from 'shared/Game'
import Player from './Player'
import Rectangle from 'shared/Game/Rectangle'

var EARTH_GRAVITY = -9.82

export default () =>
	<Game width={window.innerWidth} height={window.innerHeight} scale={10} gravity={[0, EARTH_GRAVITY * 2]} >
		<Player position={[8, 8]} radius={1} />
		<Rectangle 
			position={[0, 1]} 
			width={10} 
			height={1}
			mass={0}
			strokeStyle={[2]} 
			strokeColor={[0, 0, 0]} 
			fill={[0, 0, 0]}
		/>
	</Game>