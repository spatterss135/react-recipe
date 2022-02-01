// Stylesheets & Modules
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import Filters from './components/Filters';
import SavedRecipesView from './components/SavedRecipesView';
import Nav from './components/Nav';

// Hooks
import { useState, useEffect } from 'react';
// Context
import {SearchContext} from './context/SearchContext';
import { DataContext} from './context/DataContext'

function App() {
  // State Variables Initialization
  let [data, setData] = useState('')
  let [searchTerm, setSearchTerm] = useState('pizza')
  let [filters, setFilters] = useState([])
  let [savedData, setSavedData] = useState([])
  

  function handleSearch(e, term){
    e.preventDefault()
    setSearchTerm(term)
  }

  useEffect(()=> {
    const fetchData = async ()=> {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&number=100&fillIngredients=true`)
      const rData = await response.json()
      let filteredResults = []
      rData.results.forEach(food => {
        if (filters.length > 0){
          if (filters.every(filter => food[filter])){
            filteredResults.push(food)
          }
        }
        else {
          filteredResults.push(food)
        }

      })
      setData(filteredResults)
    }
    fetchData()
  }, [searchTerm])

  return (
    <>
    {/* <Nav /> */}
    <Router>
        <Routes>
        <Route path='/' element={
        
    <div className="App">
      <div className='grid-item-zero'>
        <Nav />
      </div>
      <div className='grid-item-one'>
      <SearchContext.Provider value={{term: '', handleSearch: handleSearch}}>
        <SearchBar />
      </SearchContext.Provider>
      </div>
      <div className='grid-item-two'>
      </div>
      <div className='grid-item-three'>
        <Filters filters={filters} setFilters={setFilters}/>
      </div>
      <div className='grid-item-four'>
      <DataContext.Provider value={data}>
        {data? <Gallery handleSave={setSavedData} savedData={savedData}/> : ""}
        
      </DataContext.Provider>
      </div>
    </div>}/>
      <Route path='/saved' element={
        <DataContext.Provider value={savedData}>
          <SavedRecipesView/>
          </DataContext.Provider>} />
        </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
