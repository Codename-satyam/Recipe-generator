import React, { useState } from "react";
import { IngredientInput } from "../../components/IngredientInput/Ingredients";
import { RecipeList } from "../../components/IngredientList/IngredientList";
import { RecipeModal } from "../../components/RecipeModal/RecipeModal";
import "./RecipeContainer.css";

export default function RecipeContainer() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRecipes = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const query = ingredients.join(",");
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=6&apiKey=e31c5bd2c448451396b0275073a40396`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setRecipes(data);
    } catch (err) {
      setError("Something went wrong while fetching recipes.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch details for a single recipe
  const fetchRecipeDetails = async (id) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=e31c5bd2c448451396b0275073a40396`
      );
      const data = await res.json();
      setSelectedRecipe(data);
      setIsModalOpen(true);
    } catch {
      alert("Failed to load recipe details");
    }
  };

  return (
    <div className="recipe-container">
      <h1 className="main-heading">Taste Bot</h1>
      <IngredientInput ingredients={ingredients} setIngredients={setIngredients} />
      <button onClick={fetchRecipes} className="btn-primary" disabled={loading}>
        {loading ? "Loading..." : "Get Recipes"}
      </button>
      {error && <p className="error">{error}</p>}
      <RecipeList recipes={recipes} onRecipeClick={fetchRecipeDetails} />
      <RecipeModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        recipe={selectedRecipe}
      />
    </div>
  );
}
