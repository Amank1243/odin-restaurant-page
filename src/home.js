export function loadHomeContent() {
    divContent.innerHTML = htmlContent;
};

const divContent = document.querySelector("div#content");
const htmlContent = `
        <div id="restaurant_name">
            <img src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
            
            <h1><strong>Shaka's Beach Bar</strong></h1>

            <img id="left" src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
        
        </div>

        <div id="about_section">
            <h1><strong>About</strong></h1>
            
            <p>
                Welcome to Shakas Beach Bar, where laid-back island vibes, salty ocean air, and good times come together. Inspired by
            the spirit of the beach and the joy of endless summer, Shakas is the perfect spot to kick back with friends, enjoy
            refreshing drinks, and soak in the relaxed coastal atmosphere. From tropical cocktails and fresh bites to live music and
            sunset views, every visit feels like a mini vacation. At Shakas Beach Bar, we believe life is better barefoot, sunsets
            should be celebrated, and every guest should leave with a smile and a little more aloha in their heart.
            </p>

        </div>

        <div id="hours">
            <h1><strong>Hours</strong></h1>
            <p>Monday: 11:00 AM - 10:00 PM<br>
            Tuesday: 11:00 AM - 10:00 PM<br>
            Wednesday: 11:00 AM - 10:00 PM<br>
            Thursday: 11:00 AM - 11:00 PM<br>
            Friday: 11:00 AM - 12:00 AM<br>
            Saturday: 10:00 AM - 12:00 AM<br>
            Sunday: Gone Surfing - Back Soon-ish</p>
        </div>
    `;