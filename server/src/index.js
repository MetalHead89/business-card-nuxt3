import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import config from './config/config.js'

const app = express()

const port = process.env.PORT || config.port

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(port,
  () => console.log(`Server start on port ${port} ...`))

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})
