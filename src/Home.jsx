import { useState } from "react";
import Header from "./component/Header";

export default function Home() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [
      ...prevIngredients,
      newIngredient
    ]);
  }

  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <div>
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

        <button
          className="w-[188px] h-[47px] bg-[#171717] text-white rounded-md text-base font-semibold"
        >
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && (

        
        <section className="max-w-[664px] mx-auto mt-7">
        
        <h2 className="text-[30px] font-bold mb-4">
          Ingredients on hand:
        </h2>

        <ul
          className="list-disc pl-8 text-lg space-y-2"
          aria-live="polite"
        >
          {ingredientsListItems}
        </ul>

        <div className="flex justify-between items-center bg-[#f3f1eb] rounded-lg px-9 py-7 mt-8">
          
          <div>
            <h3 className="text-[21px] font-medium mb-4">
              Ready for a recipe?
            </h3>

            <p className="text-[18px] text-gray-500">
              Generate a recipe from your list of ingredients.
            </p>
          </div>

          <button className="bg-[#d97757] text-white px-6 py-3 rounded-lg font-medium">
            Get a recipe
          </button>

        </div>
      </section>
  )}
    </div>
  );
}