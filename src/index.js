import "./styles.css";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact.js";

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");


let buttonStates = {
    homeOn: true,
    menuOn: false,
    contactOn: false,
};

document.addEventListener("DOMContentLoaded", ()=>{
    loadHomeContent();
});

homeButton.addEventListener("click", ()=>{
    loadHomeContent();
})

menuButton.addEventListener("click", ()=>{
    loadMenuContent();
})

contactButton.addEventListener("click", ()=> {
    loadContactContent();
})
