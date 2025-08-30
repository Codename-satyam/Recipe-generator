import React from "react";
import "./RecipeCard.css";

export function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-info">
        Used: {recipe.usedIngredientCount} | Missing: {recipe.missedIngredientCount}
      </p>
    </div>
  );
}
