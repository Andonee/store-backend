const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const productsRoute = require('./routes/products')

require('dotenv/config')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/products', productsRoute)

const mongo_password = process.env.MONGO_APIKEY

mongoose
	.connect(
		`mongodb+srv://Altivo:${mongo_password}@cluster0.yl7bn.mongodb.net/products?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
	)
	.then(app.listen(5000))
	.catch((err) => console.log(err))
