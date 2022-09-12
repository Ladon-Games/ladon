const express = require('express')
const app = express()

app.get("/test", (req, res) => {
  res.status(200).json({ message: "I work" });
})

module.exports = {
  path: '/api',
  handler: app
}