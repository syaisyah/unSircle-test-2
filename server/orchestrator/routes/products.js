const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const authentication = require('../middlewares/auth')

router.use(authentication)
router.post('/', ProductController.createProduct)
router.get('/', ProductController.findAllProduct)
router.get('/:id', ProductController.findProductById)
router.put('/:id', ProductController.updateProductById)
router.delete('/:id', ProductController.destroyProductById)


module.exports = router