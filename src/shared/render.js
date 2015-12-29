import React from 'react'
import ReactDOM from 'react-dom'

export default Component => {
	ReactDOM.render(
		<Component />,
		document.body.appendChild(document.createElement("div"))
	)
}