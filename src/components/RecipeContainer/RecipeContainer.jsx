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

  // ✅ Fetch recipes based on a single ingredient
  const fetchRecipes = async (ingredient) => {
    if (!ingredient) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      setError("Something went wrong while fetching recipes.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setSelectedRecipe(data.meals ? data.meals[0] : null);
      setIsModalOpen(true);
    } catch {
      alert("Failed to load recipe details");
    }
  };

  return (
    <div className="recipe-container">
      <h1 className="main-heading">Taste Bot</h1>


      <IngredientInput
        setIngredients={setIngredients}
        fetchRecipes={fetchRecipes}
        loading={loading}
      />

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
