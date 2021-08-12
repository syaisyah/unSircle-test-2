const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const { authentication, authorizationCreateProduct, authorizationUpdateProduct, authorizationDeleteProduct } = require('../middlewares/auth')

router.use(authentication)
router.get('/:id', ProductController.findProductById)
router.get('/', ProductController.findAllProduct)
router.post('/', authorizationCreateProduct, ProductController.createProduct)
router.put('/:id', authorizationUpdateProduct, ProductController.updateProductById)
router.delete('/:id', authorizationDeleteProduct, ProductController.destroyProductById)


module.exports = router