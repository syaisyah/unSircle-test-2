const { Product } = require('../models/product')

class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { name, image, sku, stocks, price, marketplace_price } = req.body;
      const newProduct = { name, image, sku, stocks, price, marketplace_price }
      await Product.createProduct(newProduct)
      res.status(201).json({ message: "Successfully create new product", product })
    }
    catch (err) {
      next(err)
    }
  }
  static async findAllProduct(req, res, next) {
    try {
      const products = await Product.findAll()
      res.status(200).json(products)
    }
    catch (err) {
      next(err)
    }
  }
  static async findProductById(req, res, next) {
    try {
      const productId = +req.params.id;
      const product = await Product.findProductById(productId)
      if (product) {
        res.status(200).json(product)
      } else {
        next({ msg: 'Product Not Found' })
      }
    }
    catch (err) {
      next(err)
    }
  }
  static async updateProductById(req, res, next) {
    try {
      const productId = +req.params.productId;
      const { name, image, sku, stocks, price, marketplace_price } = req.body;
      const updateProduct = { name, image, sku, stocks, price, marketplace_price }
      await Product.update(updateProduct, { where: { id: productId } })
      res.status(200).json({ message: "Successfully updated product" })
    }
    catch (err) {
      next(err)
    }
  }

  static async destroyProductById(req, res, next) {
    try {
      const productId = +req.params.productId;
      await Product.destroy(productId)
      res.status(200).json({ message: "Successfully delete product" })
    }
    catch (err) {
      next(err)
    }
  }

}

module.exports = ProductController;