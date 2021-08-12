const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = 'secret';

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET_KEY)
const verifyToken = (token) => jwt.verify(token, JWT_SECRET_KEY)

module.exports = { generateToken, verifyToken }
