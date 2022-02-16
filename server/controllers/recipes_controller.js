
const recipes = require('express').Router()
const db = require('../models')
const {Recipe} = db;


recipes.get('/', async (req, res)=> {
    console.log('get request made')
    let savedRecipes = await Recipe.findAll()
    res.send(savedRecipes)
})

recipes.post('/save', async (req, res)=> {
    console.log('post request made')
    let saveRecipe = await Recipe.create(req.query)
    res.end()
})

recipes.delete('/delete', async (req, res)=> {
    console.log('delete request made')
    let saveRecipe = await Recipe.destroy({
        where:  {id: req.query.id}
    })
    res.end()
})

module.exports = recipes;