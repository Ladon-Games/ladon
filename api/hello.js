import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('test-get'))
app.post('/', (req, res) => res.send('test-post'))

export default { path: '/api/hello', handler: app }