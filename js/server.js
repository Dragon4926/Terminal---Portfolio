const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.use('/static', express.static(path.join(__dirname, '..', 'public')))

app.use('/css', express.static(path.join(__dirname, '..', 'css')))
app.use('/js', express.static(path.join(__dirname, '..', 'js')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
