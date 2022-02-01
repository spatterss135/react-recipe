import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import GalleryItem from "./GalleryItem"

export default function Gallery({handleSave, savedData}){

    let data = useContext(DataContext)

    let foodNames = data.map((food) => {
        return (
            <GalleryItem handleSave={handleSave} data={food} savedData={savedData}/>
        )
    })
    return (
        <div className='gallery'>
            {foodNames}
        </div>
    )
}