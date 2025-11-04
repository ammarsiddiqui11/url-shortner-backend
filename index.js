import express, { urlencoded } from 'express'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'
import UrlSchema from './src/models/short_url.model.js'
import shortUrl from './src/routes/short_url.route.js'
import connectDB from './src/config/mongoose.config.js'
import { redirectFromShortUrl } from './src/controller/short_url.controller.js'

dotenv.config('./.env')

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/create',shortUrl)
app.get('/:id',redirectFromShortUrl)
//server
app.listen(process.env.PORT,()=>{
    connectDB()
    console.log(`server running on http://localhost:${process.env.PORT}`)
})

