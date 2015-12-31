import Game from 'shared/Game'
import Player from './Player'

export default () =>
	<Game width={window.innerWidth} height={window.innerHeight} GRAVITY="0" >
		<Player />
		<Player x="150" y="150" radius="15" />
	</Game>