// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())



// ROOT
app.get('/', (req, res) => {
    console.log(req.query)
})

// CONTROLLERS 
const recipesController = require('./controllers/recipes_controller')
app.use('/recipes', recipesController)


// LISTEN
app.listen(9000, () => {
    console.log(`🎸 Rockin' on port: 9000`)
})