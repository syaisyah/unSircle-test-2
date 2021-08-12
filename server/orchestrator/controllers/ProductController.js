const axios = require("axios");
const productURL = "http://localhost:3007/"


class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { name, image, sku, stocks, price, marketplace_price } = req.body;
      const newProduct = { name, image, sku, stocks, price, marketplace_price }
      const { data } = await axios.post(productURL, newProduct, { headers: { access_token: req.headers.access_token } })
      res.status(201).json(data)
    }
    catch (err) {
      next(err)
    }
  }
  static async findAllProduct(req, res, next) {
    try {
      const { data } = await axios.get(productURL, { headers: { access_token: req.headers.access_token } })
      res.status(200).json(data)
    }
    catch (err) {
      next(err)
    }
  }
  static async findProductById(req, res, next) {
    try {
      const productId = +req.params.id;
      const product = await axios(productURL + productId, { headers: { access_token: req.headers.access_token } })
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
      const { data } = await axios(productURL, updateProduct, { headers: { access_token: req.headers.access_token } })
      res.status(200).json(data)
    }
    catch (err) {
      next(err)
    }
  }
  static async destroyProductById(req, res, next) {
    try {
      const productId = +req.params.productId;
      const { data } = await axios(productURL + productId, { headers: { access_token: req.headers.access_token } })
      res.status(200).json(data)
    }
    catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController;