import { render } from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { initWithHistory } from 'store'

import setGlobals from 'packages/setGlobals'

setGlobals(global)

export default routes => {
	var history = createBrowserHistory()

	render(
		<Router history={history} routes={routes} />,
		document.body.appendChild(document.createElement("div"))
	)

	initWithHistory(history)
}