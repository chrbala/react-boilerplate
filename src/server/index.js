import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import parsePath from 'parse-filepath'

import env from '../../env'
Object.assign(process.env, env)

var app = express()
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, '../../app')))

app.use('*', async function(req, res, next) {
	var {
		absolute,
		name,
		dirname,
		extname
	} = parsePath(req.params[0])

	if (!extname)
		extname = '.html'

	if (name == 'index')
		name = ''

	if (extname == '.html') {
		var filepath = dirname + (name ? name + '/' : '') + 'root.js'
		res.send(
			'<!DOCTYPE html><body><script src="' + filepath + '"></script></body>'
		)
	} else if (absolute == '/root.js')
		res.send(
			"alert('no root configured')"
		)
	else if (extname == '.js')
		res.send(
			"window.location.replace('/')"
		)
	else
		res.sendStatus(404)
})

app.listen(app.get('port'), () => {
	console.log('Server started: http://localhost:' + app.get('port') + '/')
})