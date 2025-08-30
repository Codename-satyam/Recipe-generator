import React, { useState } from "react";
import "./IngridientInput.css"

export function IngredientInput({ ingredients, setIngredients }) {
  const [inputValue, setInputValue] = useState("");

  const addIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient));
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
        <button onClick={addIngredient} className="btn-green">
          Add
        </button>
      </div>
      <div className="ingredient-list">
        {ingredients.map((ingredient) => (
          <span key={ingredient} className="ingredient-chip">
            {ingredient}
            <button onClick={() => removeIngredient(ingredient)}>×</button>
          </span>
        ))}
      </div>
    </div>
  );
}
