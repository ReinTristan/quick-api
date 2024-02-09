import express from 'express'
import cors from 'cors'
import routes from './routes/routes.js'

const app = express()

app.use(express.json())
app.use('/', routes)

const port = process.env.PORT || 3004

app.listen(port, () => console.log('server up'))