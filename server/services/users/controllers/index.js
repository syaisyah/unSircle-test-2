const { User } = require('../models/user')
const { generateToken } = require('../helpers/token-helper')
const apiGatewayURL = 'http:localhost:4000/'

class UserController {
  static async register(req, res, next) {
    try {
      const { full_name, email, password, nik, role } = req.body;
      const newUser = { full_name, email, password, nik, role }
      await User.create(newUser)
      res.status(201).json({ message: 'Successfully create new user' })
      // panggil api gateway yang ngambil permission
      // ada tambah satu proses ke api gateway secara default jika role super admin (bisa crud), jika admin (bisa crud), employee (read only)
      
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } })
      if (user && comparedPassword(password, user.password)) {
        const access_token = generateToken({ id: user.id, email: user.email, full_name: user.full_name, role: user.role })
        res.status(200).json(access_token)
      } else {
        next({ msg: "Invalid email or password" })
      }
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
        next({ msg: "User Not Found" })
      }

    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController