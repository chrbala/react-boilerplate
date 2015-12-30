import Stage from 'shared/Easel/Stage'
import Shape from 'shared/Easel/Shape'

var App = () =>
	<Stage>
		<Shape 
			strokeColor="1" 
			strokeStyle={[0, 0, 0]} 
			fill={[255, 0, 0]}
			x="100"
			y="100"
		/>
	</Stage>

export default App