const axios = require('axios')
const { verifyToken } = require('../helpers/token-helper')
const userURL = "http://localhost:3005/"


const authentication = async (req, res, next) => {
  try {
    const decode = verifyToken(req.headers.access_token)
    const { data } = await axios.get(`${userURL}/${+decode.id}`)
    if (data) {
      req.logginUser = { id: data.id, email: data.email, role: data.role }
      next()
    } else {
      next(err)
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authentication;
