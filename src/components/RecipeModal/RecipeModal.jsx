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
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="modal-image" />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div
        className="instructions"
        dangerouslySetInnerHTML={{ __html: recipe.instructions || "No instructions available." }}
      />
    </Modal>
  );
}
