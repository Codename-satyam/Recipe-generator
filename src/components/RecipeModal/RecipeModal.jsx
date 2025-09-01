import React from "react";
import Modal from "react-modal";
import "./RecipeModal.css";

Modal.setAppElement("#root");

export function RecipeModal({ isOpen, onRequestClose, recipe }) {
  if (!recipe) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="recipe-modal"
      overlayClassName="recipe-overlay"
    >
      <button className="close-btn" onClick={onRequestClose}>×</button>

      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="modal-image" />

      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key, index) => (
            <li key={index}>
              {recipe[key]}{" "}
              {recipe[`strMeasure${key.replace("strIngredient", "")}`] || ""}
            </li>
          ))}
      </ul>

      <h3>Instructions</h3>
      <div
        className="instructions"
        dangerouslySetInnerHTML={{
          __html: recipe.strInstructions || "No instructions available.",
        }}
      />

      {recipe.strYoutube && (
        <div className="youtube-section">
          <h3>Watch Video</h3>
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </Modal>
  );
}
