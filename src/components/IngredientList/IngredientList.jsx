import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard"; 
import "./Ingri.css"; 

export function RecipeList({ recipes, onRecipeClick }) {
  if (!recipes || recipes.length === 0) {
    return <p className="no-recipes">No recipes found. Try different ingredients.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-item"
          onClick={() => onRecipeClick(recipe.id)} 
        >
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
