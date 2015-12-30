import render from 'packages/render'

import App from './App'
import NoMatch from 'shared/NoMatch'

const routes = (
	<Route path="/" component={App}>
		<Route path="*" component={NoMatch}/>
	</Route>
)

render(routes)