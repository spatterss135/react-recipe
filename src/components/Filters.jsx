

export default function Filters({filters, setFilters}){


    function handleFilters(){
        setFilters(filterArray)
    }
    
    let filterArray = []
    function handleCheck(e){
        if (e.target.checked){
            filterArray.push(e.target.value)
        }
        else{
            let index = filterArray.indexOf(e.target.value)
            filterArray = [...filterArray.slice(0, index), ...filterArray.slice(index+1)]
        }
        console.log(filterArray)
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

        <button onClick={handleFilters}>Apply Filters</button>
    </div>

    )
}