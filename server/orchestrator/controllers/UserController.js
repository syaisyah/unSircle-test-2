const axios = require("axios");
const userURL = "http://localhost:3005/"
const permissionURL = "http://localhost:3006/"


class UserController {
  static async register(req, res, next) {
    try {
      const { full_name, email, password, nik, role } = req.body;
      const newUser = { full_name, email, password, nik, role }
      const response = await axios.post(userURL, newUser)

      let newPermission;
      if (role.toLowerCase() === 'super admin') {
        newPermission = { create_product: 'Yes', read_product: 'Yes', update_product: 'Yes', destroy_product: 'Yes', UserId: response.data.user.id }
      } else if (role.toLowerCase() === 'admin') {
        newPermission = { create_product: 'Yes', read_product: 'Yes', update_product: 'Yes', destroy_product: 'Yes', UserId: response.data.user.id }
      } else if (role.toLowerCase() === 'employee') {
        newPermission = { create_product: 'No', read_product: 'Yes', update_product: 'No', destroy_product: 'No', UserId: response.data.user.id }
      }
      const { data } = await axios.post(permissionURL, newPermission)
      res.status(201).json({ register: response.data, permission: data })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { data } = await axios.post({
        url: userURL,
        method: "POST",
        data: { email, password }
      })

      res.status(200).json(data)

    } catch (err) {
      next(err)
    }
  }

  static getDetailUser(req, res, next) {
    try {
      const user = await User.findByPk(+req.params.id)
      if (user) {
        res.status(200).json(user)
      } else {
        next(err)
      }

    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController;
