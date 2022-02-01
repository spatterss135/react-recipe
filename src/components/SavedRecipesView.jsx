import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import Nav from "./Nav"
import GalleryItem from "./GalleryItem"

export default function SavedRecipesView() {

    let savedData = useContext(DataContext)
    
    let cards = savedData.map((food) => {
        return (
            <GalleryItem data={food} savedData={savedData}/>
        )
    })
    return(
        <div className="saved-container">
            <Nav />
            <div>
                {cards}
            </div>
        </div>
    )
}