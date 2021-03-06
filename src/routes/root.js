import render from 'packages/render'

import App from './App'
import Home from './Home'
import About from './About'
import NoMatch from 'shared/NoMatch'

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/about" component={About} />
		<Route path="*" component={NoMatch}/>
	</Route>
)

render(routes)