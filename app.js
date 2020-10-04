const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

require('dotenv/config')

const mongo_password = process.env.MONGO_APIKEY

mongoose
	.connect(
		`mongodb+srv://Altivo:${mongo_password}@cluster0.yl7bn.mongodb.net/<dbname>?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
	)
	.then(app.listen(3000))
	.catch((err) => console.log(err))
