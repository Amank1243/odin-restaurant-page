import "./styles.css";
import { loadHomeContent } from "./home.js";

let buttonStates = {
    homeOn: true,
    menuOn: false,
    contactOn: false,
};

document.addEventListener("DOMContentLoaded", ()=>{
    loadHomeContent();
});
