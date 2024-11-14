const express = require('express')
const morgan = require('morgan')
const app = express()
//const healthCheckRoutes = require('./routes/healthCheckRoutes')
const pathRoutes = require('./routes/pathRoutes')
//const logger = require('./middleware/logger')
const knex = require('./db/knex');


// ミドルウェアの設定
app.use(morgan('dev'))
app.use(express.json());

// apiエンドポイント
app.use('/api/paths', pathRoutes)

app.get('/api/paths', async (req, res) => {
  try {
    const paths = await knex('paths').select('*')
    console.log(paths)
    res.status(200).json(paths)
  } catch (err) {
    console.log(err.stack)
    res.status(500).json({ error: 'Failed to get paths' })
  }
})



module.exports = app
