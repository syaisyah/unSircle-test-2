const { Permission } = require('../models/permission')
// nanti ada navbar permission, bikin aja tabel ada edit permissions biar mudah

class PermissionController {
  static async getUserPermission(req, res, next) {
    try {
      //bisa juga keterangan user disimpan di redis
      const userPermissions = await Permission.findOne({ where: { UserId: +req.logginUser.id } })
      res.status(200).json(userPermissions)
    } catch (err) {
      next(err)
    }
  }
  
  static editUserPermission(req, res, next) {
    try {
      const userId = +req.params.id;
      const { create_product, read_product, update_product, destroy_product, UserId } = req.body;
      const newPermission = { create_product, read_product, update_product, destroy_product,UserId };
      await Permission.update(newPermission, { where: { id: permissionId } })
      res.status(200).json({ message: "Successfully update user permission" })
    } catch (err) {
      next(err)
    }
  }

  static createUserPermission(req, res, next) {
    try {
      const userId = +req.params.id;
      const { create_product, read_product, update_product, destroy_product, UserId } = req.body;
      const newPermission = { create_product, read_product, update_product, destroy_product,UserId };
      await Permission.create(newPermission)
      res.status(201).json({ message: "Successfully create user permission" })
    } catch (err) {
      next(err)
    }
  }
}


module.exports = PermissionController;