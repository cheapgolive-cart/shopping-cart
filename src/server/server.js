import express from 'express'
import accountRouter from './routes/index.js'
import bodyParser from 'body-parser'

export default class ShoppingCartServer {
  start () {
    const server = express()
    server.use(bodyParser.json())
    server.get('/', (req, res) => {
      console.log('enter')
      let body = {'name': 'syam'}
      res.json(body)
    })
    server.use('/api', accountRouter())
    const port = process.env.PORT || 3000
    server.listen(port, function () {
      console.log(`sever started on port[${port}]`)
    }).on('error', function (error) {
      console.log('error occured', error.message)
      throw new Error(error.message)
    })
  }
}

const server1 = new ShoppingCartServer()
process.on('uncaughtException', function (error) {
  console.log(error.message)
  process.exit(-1)
})
server1.start()
