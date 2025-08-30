import React, { useState } from "react";
import LandingPage from "./components/LandingPage/Landing";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleStart = () => {
    setFadeOut(true); 
    setTimeout(() => {
      setShowLanding(false); 
    }, 800); 
  };

  return (
    <div>
      {showLanding ? (
        <LandingPage onStart={handleStart} fadeOut={fadeOut} />
      ) : (
        <RecipeContainer />
      )}
    </div>
  );
}
