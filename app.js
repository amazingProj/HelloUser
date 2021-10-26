const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req,res) => {
    
})
app.get('/person', function (req, res) {
    res.send(`Hello ${req.query.name}`)
  })

  app.listen(port, () => {})
