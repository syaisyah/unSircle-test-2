const router = require('express').Router()
const PermissionController = require('../controllers/PermissionController')
const authentication = require('../middlewares/auth')


router.post('/', PermissionController.createUserPermission)
router.use(authentication)
router.get('/:id', PermissionController.getUserPermission)
router.put('/:id', PermissionController.editUserPermission)



module.exports = router