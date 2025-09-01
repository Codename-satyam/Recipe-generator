import React from "react";
import "./RecipeCard.css";

export function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb} // ✅ MealDB Image
        alt={recipe.strMeal}
        className="recipe-image"
      />
      <h3 className="recipe-title">{recipe.strMeal}</h3> {/* ✅ MealDB Title */}
    </div>
  );
}
