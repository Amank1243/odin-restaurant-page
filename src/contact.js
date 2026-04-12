export function loadContactContent() {
    divContent.innerHTML = htmlContent;
};

const divContent = document.querySelector("div#content");
const htmlContent = ` <div id="restaurant_name">
            <img src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
        
            <h1><strong>!Contact Us!</strong></h1>
        
            <img id="left" src="/coconut-drink.png" alt="Coconut Drink">
            <!-- <a href="https://www.flaticon.com/free-icons/vacation" title="vacation icons">Vacation icons created by Freepik - Flaticon</a> -->
        </div>

        <div class="contactSection">
            <h1>Surfin' Sam</h1>

            <div id="info" class="info">
                <p>Manager</p>
                <p>949-123-4567</p>
                <p>surfinSam@gmail.gov</p>
            </div>
        </div>

        <div class="contactSection">
            <h1>Tiki Tom</h1>

            <div id="info" class="info">
                <p>Waiter</p>
                <p>123-456-6789</p>
                <p>iHeartSpongeBob@gmail.com</p>
            </div>
        </div>

        <div class="contactSection">
            <h1>Laid-back Larry</h1>

            <div id="info" class="info">
                <p>Employee</p>
                <p>123-456-6767</p>
                <p>larryDaLobster@gmail.gov</p>
            </div>

        </div>`;