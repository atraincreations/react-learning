import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, yields, calories, image, ingredients, warnings, protein, carbs, fats}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.servings}>Servings: {yields}</p>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories} >Calories Per Serving: {Math.round(calories/yields)}</p>
            <div >
                <p className={style.macros}>Protein: {Math.round(protein/yields)}g</p>
                <p className={style.macros}>Carbs: {Math.round(carbs/yields)}g</p>
                <p className={style.macros}>Fats: {Math.round(fats/yields)}g</p>
            </div>
            <img className={style.image} src={image} alt=""/>
            <div className={style.warning}>
                <p>
                    {warnings.map(warning =>(
                        <span>| {warning} |</span>
                    ))}
                </p>
            </div>
            
        </div>
    );
}

export default Recipe;