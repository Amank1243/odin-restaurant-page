import "./styles.css";
import { initialPageLoad } from "./home.js";

let buttonStates = {
    homeOn: true,
    menuOn: false,
    contactOn: false,
};

document.addEventListener("DOMContentLoaded", ()=>{
    initialPageLoad();
});
