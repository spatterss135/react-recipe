

export default function Filters({filters, setFilters}){

    

    function handleCheck(e){
        if (e.target.checked && !filters.includes(e.target.value)){
            setFilters([...filters, e.target.value])
        }
        else{
            let index = filters.indexOf(e.target.value)
            console.log(index)
            setFilters([...filters.slice(0, index), ...filters.slice(index+1)])
        }
        console.log(filters)
    }

    return(
    <div>
        <input onClick={(e)=> handleCheck(e)} type="checkbox" id="vegetarianbox" name="vegetarian" value="vegetarian" />
        <label htmlFor="vegetarianbox">vegetarian</label>
        <br />
        <input onClick={(e)=> handleCheck(e)} type="checkbox" id="veganbox" name="vegan" value="vegan" />
        <label htmlFor="veganbox">vegan</label>
        <br />
        <input onClick={(e)=> handleCheck(e)} type="checkbox" id="dairyFreebox" name="dairyFree" value="dairyFree" />
        <label htmlFor="dairyFreebox">dairy-free</label>
        <br />
        <input onClick={(e)=> handleCheck(e)} type="checkbox" id="glutenFreebox" name="glutenFree" value="glutenFree" />
        <label htmlFor="glutenFreebox">gluten-free</label>
    </div>

    )
}