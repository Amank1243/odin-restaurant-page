export function loadMenuContent() {
    divContent.innerHTML = htmlContent;
};

const divContent = document.querySelector("div#content");
const htmlContent = `
        <div id="restaurant_name">
            <img src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
        
            <h1><strong>Menu</strong></h1>
        
            <img id="left" src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
        
        </div>

        <div id="food-section">
            <div>
                <h2>Surfin Salad - $12.50</h2>
                <img id="beach_salad" src="/beach_salad.jpg" alt="Colorful salad resting on a beach towel, with a side of lemon and lime on a wooden fish like plate, with clear skies and a bright blue beach in the background">
            </div>

            <div>
                <p>Ingredients:
                Mixed greens, cherry tomatoes, cucumber, red onion, avocado, mango, shredded carrots, feta cheese, toasted almonds,
                citrus vinaigrette</p>

                <br><br><br>

                <p>Description: A crisp, colorful salad packed with fresh ingredients and bright island flavor. Light, refreshing, and perfect for a
                warm beach day, Surfin Salad combines crunchy greens, juicy fruit, and savory toppings for a laid-back dish</p>
            </div>
        </div>
        
        <div id="food-section">
            <div>
                <h2>Costal Lobster - $28.31</h2>
                <img id="costal_lobster" src="/beach_lobster.jpeg" alt="Lobster with a lemon and some salad on the side, with a bold, black tree resting in the foreground, a light blue ocean in the middle ground, and mountains in the background">
            </div>

            <div>
                <p>Ingredients:
                Lobster, garlic butter, lemon, olive oil, sea salt, cracked black pepper, fresh parsley, grilled corn, roasted baby
                potatoes</p>

                <br><br><br>

                <p>Description: Tender, buttery lobster served with bright coastal flavors for a fresh and satisfying beachside favorite. Lightly
                seasoned and finished with citrus and herbs, this dish is rich without feeling heavy and brings a little taste of the
                ocean to your table.</p>

                <br><br><br>
                
                <p>Served With:
                    Grilled corn, roasted baby potatoes, and a charred lemon wedge</p>
            
                <br><br><br>

                <p>Chef’s Note:
                Best enjoyed with a fresh squeeze of lemon for the full coastal flavor.</p>

            </div>

            <p></p>
        </div>
        
        <div id="food-section">
            <div>
                <h2>Surf'n Surf Plate - $14.95</h2>
                <img id="beach_plate" src="/beach_surf_plate.jpg" alt="A plate of octopus with a plethora of colorful fruits to go along with it. The plate is resting on a colorful tribal blanket, resting where a bright green tropical forest and turquoise ocean meet ">
            </div>
            
            <div>
                <p>Ingredients:
                Mixed greens, grilled shrimp, avocado, cherry tomatoes, cucumber, red onion, roasted corn, shredded carrots, crunchy
                tortilla strips, and a citrus-lime vinaigrette</p>

                    <br><br><br>

                <p>Description:
                A fresh, beachy salad loaded with grilled shrimp and crisp vegetables, topped with creamy avocado and crunchy tortilla
                strips. Tossed in a bright citrus-lime vinaigrette, Surfin’ Salad is light, flavorful, and perfect for a refreshing
                meal.</p>

              </div>

        </div>
`