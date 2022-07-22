// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// import and configure dotenv
require("dotenv").config({ path: "./config.env" });

// Import routes
const shaparoosRouter = require('./routes/shaparoo-route')


// Set default port for express app
const PORT = process.env.PORT || 4000

// Create express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Implement shaparoos route
app.use('/shaparoos', shaparoosRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('500 Internal Server Error\nIt is not you, it is us.')
})

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send('404 Page Not Found\nMaybe nav is messed up (if so, sorry!), but just in case, double check your URL.')
})

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})