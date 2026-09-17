import { useState } from "react";
import Header from "./component/Header";

export default function Home() {
  function addIngredient(formData) {
    // event.preventDefault();
    // Get all the data from the submitted form
    // const formData = new FormData(event.currentTarget);
    // Get the value of the input named "ingredient"
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <div>
      <Header />
      <form action={addIngredient}
        className="flex justify-center items-center mt-30 gap-3"
        
      >
        <input
          type="text"
          placeholder="e.g Tomato"
          name="ingredient"
          className="border border-gray-300 rounded-md px-3 text-sm w-[300px] h-[30px]"
        />
        <button className="w-[143px] h-[30px] bg-black text-white rounded-md text-sm font-semibold">
          + Add ingredient
        </button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}
