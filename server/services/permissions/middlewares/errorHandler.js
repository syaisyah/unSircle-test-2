function errorHandler(err, req, res, next) {
  console.log(err, 'error handler>>>>>>>>>')
  let statusCode = 500
  let message = ["Internal server errors"]

  switch (err.name) {
    case 'SequelizeValidationError':
      statusCode = 400
      message = err.errors.map(el => el.message)
      break;
    case 'SequelizeUniqueConstraintError':
      statusCode = 400
      message = err.errors.map(el => `${el.value} is already exist`)
      break;
    case "SequelizeDatabaseError":
      if (err.parent.code === '23502') {
        statusCode = 400
        message = err.errors[0].message
      }
      break;
    case 'JsonWebTokenError':
      statusCode = 401
      message = [`UnAuthenticated - You are not logged in`]
      break;
  }

  switch (err.msg) {
    case 'Invalid email or password':
      statusCode = 400
      message = [`${err.msg}`]
      break;
    case 'UnAuthorized - Permission is denied':
      statusCode = 403
      message = [`${err.msg}`]
      break;
  }
  res.status(statusCode).json({ status: statusCode, message })
}


module.exports = errorHandler
