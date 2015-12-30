import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { initWithHistory } from 'store'

import setGlobals from 'packages/setGlobals'

setGlobals(global)

export default routes => {
	var history = createBrowserHistory()
	var store = initWithHistory(history)

	render(
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>,
		document.body.appendChild(document.createElement("div"))
	)
}