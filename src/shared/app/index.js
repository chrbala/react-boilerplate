import Game from 'shared/Game'
import Player from './Player'
import Rectangle from 'shared/Game/Rectangle'

export default () =>
	<Game width={window.innerWidth} height={window.innerHeight} gravity={[0, 9.82 * 10]} >
		<Player position={[100, 100]} radius="5" />
		<Player position={[150, 150]} radius="15" />
		<Rectangle 
			position={[0, 200]} 
			width="500" 
			height="5" 
			strokeStyle={[2]} 
			strokeColor={[0, 0, 0]} 
			fill={[0, 0, 0]}
		/>
	</Game>