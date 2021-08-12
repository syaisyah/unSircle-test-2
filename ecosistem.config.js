module.exports = {
  apps: [
    {
      name: 'client',
      script: 'cd client && npm start'
    },
    {
      name: 'services - users',
      script: 'cd server/services/users && nodemon app.js'
    },
    {
      name: 'services - products',
      script: 'cd server/services/products && nodemon app.js'
    },
    {
      name: 'services - permissions',
      script: 'cd server/services/permissions && nodemon app.js'
    },
    {
      name: 'orchestrator',
      script: 'cd server/orchestrator && nodemon app.js'
    }
  ]
}