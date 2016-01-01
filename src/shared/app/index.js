import Game from 'shared/Game'
import Player from './Player'

export default () =>
	<Game width={window.innerWidth} height={window.innerHeight} gravity={[0, 9.82]} >
		<Player position={[100, 100]} radius="5" />
		<Player position={[150, 150]} radius="15" />
	</Game>