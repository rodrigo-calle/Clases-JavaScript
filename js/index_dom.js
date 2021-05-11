import hamburguerMenu from "./hamburguer.js";
import buttonsClock from "./clock.js";
import {moveBall, shortcuts} from "./pelota.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";

const d = document;



d.addEventListener("DOMContentLoaded", (e)=>{

    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    //inicio cuenta regresiva
    countdown(
        "countdown", 
        "May 10, 2022 14:56:19", 
        "Feliz cumpleaños Rodrigo");

    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
     "youtube",
     "(min-width:1024px)",
     `<a href="https://www.youtube.com/watch?v=EYguMUfse2g" target="_blank"
        rel="noopener">Ver video </a> `, 
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/
     EYguMUfse2g" title="YouTube video player" 
     frameborder="0" allow="accelerometer;
      autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture" allowfullscreen></iframe>`)

    responsiveMedia(
    "gmaps", 
    "(min-width:1024px)", 
    `<a href="https://goo.gl/maps/T882KFcA6DyWJ1Ys5" target="_blank"
    rel="noopener">Ver Mapa </a> `,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.994605412395!2d-75.41045358465574!3d-10.579594081433713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9109c1bde36c807b%3A0x590140a8d5d27de1!2sVivero%20Santo%20Domingo!5e0!3m2!1ses-419!2spe!4v1620681529224!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)

    responsiveTester("responsive-tester");
    });
  
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


darkTheme(".dark-theme-btn", "dark-mode");


//hamburguerMenu(".panel-btn", ".panel");
