import React,{useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = 'a48b6e24';
  const APP_KEY = 'e645cd5c0cd53231493bea0dd03813a5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
    
  useEffect( () => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipes();
  }, [query]);



  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <h1 className="title">Search for a recipe!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form> 
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
                  key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                  yields={recipe.recipe.yield}
                  calories={recipe.recipe.calories}
                  protein={recipe.recipe.totalNutrients.PROCNT.quantity}
                  carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
                  fats={recipe.recipe.totalNutrients.FAT.quantity} 
                  image={recipe.recipe.image}
                  ingredients ={recipe.recipe.ingredients}
                  warnings={recipe.recipe.healthLabels}
          />
        ))}
      </div>
      <div class="ad">
        <div class="name">
            <span id="watermark">created by @alexpunderwood</span>
        </div>
      </div>
    </div>
    
  );
};

export default App;
