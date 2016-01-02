import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import env from '../../env'
Object.assign(process.env, env)

var app = express()
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, '../../app')))

app.get('*', (req, res) => {
  res.send('<!DOCTYPE html><body><script src="/root.js"></script></body>')
})

app.listen(app.get('port'), () => {
	console.log('Server started: http://localhost:' + app.get('port') + '/')
})