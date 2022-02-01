import { useContext, useState } from "react"
import { SearchContext } from "../context/SearchContext"

export default function SearchBar(){
    let [input, setInput] = useState('')
    let {term, handleSearch} = useContext(SearchContext)
    return(
        <div className="searchbox  mx-2 my-2">
            <input className='searchfield' onChange={(e)=> {setInput(e.target.value)}}type="text" />
            <button className="btn btn-light searchbtn" onClick={(e, term) => handleSearch(e, input)}>Search</button>
        </div>
    )
}