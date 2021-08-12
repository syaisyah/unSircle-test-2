const axios = require("axios");
const permissionURL = "http://localhost:3006/"



class PermissionController {

  static async getAllDataPermission(req, res, next) {
    try {
      const { data } = await axios(permissionURL, { headers: { access_token: req.headers.access_token } })
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  static async getUserPermission(req, res, next) {
    try {
      const userId = +req.params.id
      const { data } = await axios.get(permissionURL + userId)
      res.status(200).json(userPermissions)
    } catch (err) {
      next(err)
    }
  }

  static editUserPermission(req, res, next) {
    try {
      const userId = +req.params.id;
      const { create_product, read_product, update_product, destroy_product, UserId } = req.body;
      const newPermission = { create_product, read_product, update_product, destroy_product, UserId };
      const { data } = await axios.put(permissionURL + userId, newPermission, { headers: { access_token: req.headers.access_token } })

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static createUserPermission(req, res, next) {
    try {
      const { create_product, read_product, update_product, destroy_product, UserId } = req.body;
      const newPermission = { create_product, read_product, update_product, destroy_product, UserId };
      const { data } = await axios.post(permissionURL, newPermission, { headers: { access_token: req.headers.access_token } })
      res.status(201).json({ message: "Successfully create user permission" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PermissionController;