const router = require('express').Router()
const UserController = require('../controllers/')
// const authentication = require('../middlewares/auth')


// router.use(authentication)
router.post('/users/register', UserController.register)
router.get('/users/login', UserController.login)
router.get('/users/:id', UserController.getDetailUser)


module.exports = router;