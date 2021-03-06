const axios = require('axios')
const { verifyToken } = require('../helpers/token-helper')
const userURL = "http://localhost:3005/"
const permissionURL = "http://localhost:3006/"

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

const authorizationSuperAdmin = (req, res, next) => {
  req.logginUser.role.toLowerCase() === 'super admin' ? next() : next({ msg: 'UnAuthorized - Permission is denied' })
}


const authorizationCreateProduct = async (req, res, next) => {
  try {
    const userId = +req.params.id;
    const { data } = await axios.get(permissionURL + userId)
    data.create_product ? next() : next({ msg: 'UnAuthorized - Permission is denied' })
  } catch (err) {
    next(err)
  }
}



const authorizationUpdateProduct = async (req, res, next) => {
  try {
    const userId = +req.params.id;
    const { data } = await axios.get(permissionURL + userId)
    data.update_product ? next() : next({ msg: 'UnAuthorized - Permission is denied' })
  } catch (err) {
    next(err)
  }
}

const authorizationDeleteProduct = async (req, res, next) => {
  try {
    const userId = +req.params.id;
    const { data } = await axios.get(permissionURL + userId)
    data.delete_product ? next() : next({ msg: 'UnAuthorized - Permission is denied' })
  } catch (err) {
    next(err)
  }
}

module.exports = { authentication, authorizationSuperAdmin, authorizationCreateProduct, authorizationUpdateProduct, authorizationDeleteProduct };
