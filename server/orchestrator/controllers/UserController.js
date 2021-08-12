const axios = require("axios");
const userURL = "http://localhost:3005/"

class UserController {
  static async register(req, res, next) {
    try {
      const { full_name, email, password, nik, role } = req.body;
      const newUser = { full_name, email, password, nik, role }
      const { data } = await axios.post(userURL, newUser, { headers: access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController;
