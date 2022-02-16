import ToggleText from "./ToggledText"
import { useState } from "react"

export default function GalleryItem({data, handleSave, savedData}){
    const fetchSavedData =  async ()=> {
      
      const response = await fetch(`http://localhost:9000/recipes`)
      const res = await response.json()
      res.map(recipe => {
        recipe.diets = recipe.diets.split(',')
      })
      handleSave(res)
    }



  let isInSavedData = savedData.some(item => item.spoonacularSourceUrl === data.spoonacularSourceUrl)

    async function saveItem(e, food){
      if (!isInSavedData){
        e.target.setAttribute('id', 'saveBtnClicked')
        await fetch(`http://localhost:9000/recipes/save/?id=${food.id}&title=${food.title}&summary=${food.summary}&diets=${String(food.diets)}&image=${food.image}&spoonacularSourceUrl=${food.spoonacularSourceUrl}&healthScore=${food.healthScore}`, {
          method: "POST"
        })
        fetchSavedData()
      }
      else {
        e.target.setAttribute('id', '')
        await fetch(`http://localhost:9000/recipes/delete/?id=${food.id}&title=${food.title}&summary=${food.summary}&diets=${String(food.diets)}&image=${food.image}&spoonacularSourceUrl=${food.spoonacularSourceUrl}&healthScore=${food.healthScore}`, 
        { method: 'DELETE'})
        fetchSavedData()
      }
      
      
    }

    let diets = data.diets.map(diet => {
      if (diet.includes('vegetarian')){ diet='vegetarian'}
      if (diet.includes('vegan')){ diet='vegan'}
      if (diet.includes('dairy')){ diet='dairyFree'}
      if (diet.includes('gluten')){ diet='glutenFree'}
        return (
            <span>
                <img src={`images/${diet}.png`} className="mx-1" width='20px' alt="" />
            </span>
            
            
        )
    })

    let healthScore = function(){
      let color;
      if (data.healthScore < 25){
        color = 'red'
      }
      else if (data.healthScore < 50){
        color = 'orange'
      }
      else {
        color = 'green'
      }

      return (
          <span className={`score ${color}`}>{data.healthScore}</span>
      )
    }


    

    

    return (
        <div className="card" style={{width: '100%'}}>
        <div className="row">
          <div className="col-md-4 image-container pe-0" >
            <img src={data.image} alt="" style={{width: '100%'}}/>
          </div>
          <div className="ps-0 col-md-8">
            <div className="card-body">
              <div className="title-area">
              <h5 className="card-title">{data.title}</h5>
              {healthScore()}
              </div>
              <div className="card-text" style={{paddingBottom: '3em'}}>
              <ToggleText text={data.summary} />
              </div>
            </div>
            <div className='card-footer footer'>
              <a target="_blank" href={data.spoonacularSourceUrl} className="btn btn-primary">Recipe</a>
              <span className="card-text">
                {diets}
              </span>
              <span className='save'>
                {!isInSavedData?
                <button className='btn btn-success' style={{borderRadius: "50%"}} onClick={(e)=> {
                saveItem(e,data)}}>S</button>
                :
                <button className='btn btn-success' id='saveBtnClicked' style={{borderRadius: "50%"}} onClick={(e)=> {
                saveItem(e,data)}}>S</button>}
                
                </span>
              </div>
          </div>
        </div>
      </div>
    )
}