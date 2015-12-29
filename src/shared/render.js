import { render } from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

export default routes => {
	render(
		<Router history={createBrowserHistory()} routes={routes} />,
		document.body.appendChild(document.createElement("div"))
	)
}