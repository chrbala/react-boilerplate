const App = ({children}) => 
	<div>
		<h1>App</h1>
		<Link to='/'>Home</Link>
		<Link to='about'>About</Link>
		<Link to='404'>No Route</Link>
		{children}
	</div>

export default App