const router = require('express').Router()
const ProductController = require('../controllers/')
// const authentication = require('../middlewares/auth')

// router.use(authentication)
router.post('/products', ProductController.createProduct)
router.get('/products', ProductController.findAllProduct)
router.get('/products/:id', ProductController.findProductById)
router.put('/products/:id', ProductController.updateProductById)
router.delete('/products/:id', ProductController.destroyProductById)


module.exports = router