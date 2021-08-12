const router = require('express').Router()
const PermissionController = require('../controllers')

router.get('/permissions/:id', PermissionController.getUserPermission)
router.put('/permissions/:id', PermissionController.editUserPermission)
router.post('/permissions', PermissionController.createUserPermission)


module.exports = router;