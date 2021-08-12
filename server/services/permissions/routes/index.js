const router = require('express').Router()
const PermissionController = require('../controllers')
// const authentication = require('../middlewares/auth')

// router.use(authentication)
router.get('/permissions/:id', PermissionController.getUserPermission)
router.put('/permissions/:id', PermissionController.editUserPermission)



module.exports = router;