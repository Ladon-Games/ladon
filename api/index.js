import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Hi from /api'))

export default { path: '/api', handler: app }