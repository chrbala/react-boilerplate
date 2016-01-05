import { getState, dispatch } from 'store'
import value from 'store/actions/value'

function reduxTest() {
	var state = getState()
	var previousValue = state.app.value
	dispatch(value.set(!previousValue))
}

const App = ({children}) => 
	<div>
		<h1>App</h1>
		<Link to='/'>Home</Link>
		<Link to='about'>About</Link>
		<Link to='404'>No Route</Link>
		<button onClick={reduxTest}>Test</button>
		{children}
	</div>

export default App