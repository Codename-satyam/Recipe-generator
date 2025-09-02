import React, { useState } from "react";
import "./IngridientInput.css";

export function IngredientInput({ setIngredients, fetchRecipes }) {
  const [inputValue, setInputValue] = useState("");

  const handleGetRecipes = () => {
    if (inputValue.trim()) {
      setIngredients([inputValue.trim()]);
      fetchRecipes(inputValue.trim()); 
    }
  };

  return (
    <div className="ingredient-input">
      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter ingredient"
        />
        <button onClick={handleGetRecipes} className="btn-green">
          Get Recipes
        </button>
      </div>
    </div>
  );
}
