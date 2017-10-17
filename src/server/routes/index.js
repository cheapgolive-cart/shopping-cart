import express from 'express'
/* GET home page. */
const accountRouter = function () {
  const router = express.Router()

  router.get('/account', function (req, res) {
    console.log('entered account')
    res.json({ username: 'Express' })
  })
  router.post('/profile', (req, res) => {
    console.log('entered post')
    res.json(req.body)
  })
  return router
}
export default accountRouter
