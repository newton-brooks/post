const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hello there')
})


app.post('/moods', (req, res) => {
    if (!req.body.name || !req.body.mood) {
      return res.send('please specify a name and a mood')
    }
  
    fs.appendFile('users.json', JSON.stringify(req.body), (err) => {
      if (err) { throw err };
      console.log('Appended to the file!');
      res.json(req.body)
    }); s
  })


const port = 3000
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})