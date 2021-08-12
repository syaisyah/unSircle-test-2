const router = require('express').Router()
const userRoutes = require('./users')
const productRoutes = require('./products')
const permissionRoutes = require('./permissions')


router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/permissions', permissionRoutes)


module.exports = router;