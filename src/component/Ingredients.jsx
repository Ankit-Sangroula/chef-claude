export default function Ingredients(props){
      const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
    return(
         <section className="max-w-[664px] mx-auto mt-7">
          <h2 className="text-[30px] font-bold mb-4">Ingredients on hand:</h2>

          <ul className="list-disc pl-8 text-lg space-y-2" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {props.ingredients.length > 3 && (
            <div className="flex justify-between items-center bg-[#f3f1eb] rounded-lg px-9 py-7 mt-8">
              <div>
                <h3 className="text-[21px] font-medium mb-4">
                  Ready for a recipe?
                </h3>

                <p className="text-[18px] text-gray-500">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>

              <button
                onClick={props.getRecipe}
                className="bg-[#d97757] text-white px-6 py-3 rounded-lg font-medium"
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
    );
}