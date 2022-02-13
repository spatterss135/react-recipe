import ToggleText from "./ToggledText"
import { useState } from "react"

export default function GalleryItem({data, handleSave, savedData}){


  let isInSavedData = savedData.some(item => item.sourceUrl === data.sourceUrl)

    function saveItem(e, food){
      if (!isInSavedData){
        e.target.setAttribute('id', 'saveBtnClicked')
        handleSave([...savedData, food])
      }
      else {
        e.target.setAttribute('id', '')
        let index = savedData.indexOf(food)
        handleSave([...savedData.slice(0, index), ...savedData.slice(index+1)])

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


    

    

    return (
        <div className="card" style={{width: '100%'}}>
        <div className="row">
          <div className="col-md-4 image-container pe-0" >
            <img src={data.image} alt="" style={{width: '100%'}}/>
          </div>
          <div className="ps-0 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
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