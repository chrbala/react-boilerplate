import Game from 'shared/Game'
import Player from './Player'

export default () =>
	<Game width={window.innerWidth} height={window.innerHeight} GRAVITY="0" >
		<Player />
	</Game>