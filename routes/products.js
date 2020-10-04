const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.json(products)
	} catch (error) {
		res.json({ message: error })
	}
})

router.post('/', async (req, res) => {
	const product = new Product({
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
	})

	try {
		const newProduct = await product.save()
		res.json(newProduct)
	} catch (error) {
		res.json({ message: error })
	}
})

router.get('/:productId', async (req, res) => {
	try {
		const product = await Product.findById(req.params.productId)
		res.json(product)
	} catch (error) {
		res.json({ message: error })
	}
})

router.delete('/:productId', async (req, res) => {
	try {
		const removedProduct = await Product.deleteOne({
			_id: req.params.productId,
		})
		res.json(removedProduct)
	} catch (error) {
		res.json({ message: error })
	}
})

router.patch('/:productId', async (req, res) => {
	try {
		const updatedProduct = await Product.updateOne(
			{ _id: req.params.productId },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
					price: req.body.price,
				},
			}
		)
		res.json(updatedProduct)
	} catch (error) {
		res.json({ message: error })
	}
})

module.exports = router
