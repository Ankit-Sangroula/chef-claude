import { useState } from "react";
import Header from "./component/Header";
import Recipe from "./component/Recipe";
import Ingredients from "./component/Ingredients";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"

export default function Home() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipe, setRecipe] = useState("");



  async function getRecipe() {
    // setRecipeShown((prevShown) => !prevShown);
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
      <Header />

      <form
        action={addIngredient}
        className="flex justify-center items-center mt-30 gap-3"
      >
        <input
          type="text"
          placeholder="e.g oregano"
          name="ingredient"
          className="border border-gray-300 rounded-md px-4 text-lg w-[460px] h-[47px]"
        />

        <button className="w-[188px] h-[47px] bg-[#171717] text-white rounded-md text-base font-semibold">
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
       <Ingredients ingredients={ingredients} getRecipe={getRecipe}/>
      )}
      {recipe && (<Recipe/>
      )}
    </main>
  );
}
