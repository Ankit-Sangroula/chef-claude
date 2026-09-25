export default function Recipe(){
    return(
        
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article
            className="text-[#475467] leading-7 text-lg font-normal"
            aria-live="polite"
          >
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li className="mb-2">1 lb. ground beef</li>
              <li className="mb-2">1 onion, diced</li>
              <li className="mb-2">3 cloves garlic, minced</li>
              <li className="mb-2">2 tablespoons tomato paste</li>
              <li className="mb-2">1 (28 oz) can crushed tomatoes</li>
              <li className="mb-2">1 cup beef broth</li>
              <li className="mb-2">1 teaspoon dried oregano</li>
              <li className="mb-2">1 teaspoon dried basil</li>
              <li className="mb-2">Salt and pepper to taste</li>
              <li className="mb-2">8 oz pasta of your choice</li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li className="mb-2">
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li className="mb-2">
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li className="mb-2">
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li className="mb-2">
                Stir in the tomato paste and cook for 1 minute.
              </li>
              <li className="mb-2">
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li className="mb-2">
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li className="mb-2">
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li className="mb-2">
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li className="mb-2">
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
    );
}