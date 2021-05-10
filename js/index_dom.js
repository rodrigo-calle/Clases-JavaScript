import hamburguerMenu from "./hamburguer.js";
import buttonsClock from "./clock.js";
import {moveBall, shortcuts} from "./pelota.js";


const d = document;



d.addEventListener("DOMContentLoaded", (e)=>{

    hamburguerMenu(".panel-btn", ".panel", ".menu a");
})

d.addEventListener("DOMContentLoaded", (e)=>{
    buttonsClock(".start-clock", 
    ".clock",
    ".stop-clock", 
    ".audio-clock",
    ".start-alarm",
    ".stop-alarm")
})

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});





//hamburguerMenu(".panel-btn", ".panel");