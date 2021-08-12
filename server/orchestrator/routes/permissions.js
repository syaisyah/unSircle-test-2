const router = require('express').Router()
const PermissionController = require('../controllers/PermissionController')
const { authentication, authorizationSuperAdmin } = require('../middlewares/auth')


router.post('/', PermissionController.createUserPermission)
router.use(authentication)
router.get('/', PermissionController.getAllDataPermission)
router.get('/:id', PermissionController.getUserPermission)
router.put('/:id', authorizationSuperAdmin, PermissionController.editUserPermission)



module.exports = router