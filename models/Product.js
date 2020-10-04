const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('Product', ProductSchema)
