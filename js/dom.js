/*   let nombre = "Rodrigo"
        //let text = `hola ${nombre} bienvenido esta es tu pagina Tecgeniuslab`
        //let texto = "Hi my name is Rodrigo I'm from Peru but I live in Oxapampa"
        const hablar = (texto) =>speechSynthesis.
        speak(new SpeechSynthesisUtterance(texto));

        hablar(texto); 
 */
/* console.log("****************Elementos del Documento***************")
console.log(window.document) // es igua a:
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)//representa a la etiqueta html
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
    console.log(document.getSelection().toString())//valores seleccionados de la pag
}, 3000);

document.write("<h2>Hola mundo desde el DOM</h2>");
 */
//clase 62 Nodos Elementos y selectores
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
//nuevo
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(element => {
    console.log(element)
});

console.log(document.querySelectorAll(".card"));
console.log(document.querySelector(".card"));
console.log(document.querySelector(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */
//
/* console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))
document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-PE");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

//Data-AtTributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
$linkDOM.dataset.description = "prueba";
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.setAttribute("data-description", "Molde de objeto de documento");
console.log($linkDOM.getAttribute("data-description")); */

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color="red");
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style);
console.log(window.getComputedStyle($linkDOM).getPropertyValue("background-color"))
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"
console.log($linkDOM.style); */

//Variables css-Custom Properties CSS
/* const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor, varYellowColor);

    $body.style.backgroundColor = varDarkColor ;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color", "#000")
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    console.log(varDarkColor, varYellowColor);
    $body.style.setProperty("background-color", varDarkColor) */

/* const $card = document.querySelector(".card")
console.log($card.classList);
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
// $card.classList.toggle("rotate-45")
//console.log($card.classList.contains("rotate-45")) 
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80", "sepia")
$card.classList.remove("opacity-80", "sepia")
$card.classList.toggle("opacity-80", "sepia") */
/* const $whatIsDOM = document.getElementById("que-es");
let text =`
        <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
        API para documentos HTML y XML.
        </p>
        <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
        </p>
        <p>
            <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
        </p>
        `;

//$whatIsDOM.innerText = text;
//$whatIsDOM.textContent = text;
//$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */
//Para llamar a los elementos(etiquetas HTML) debes usar el element
/* 
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentElement);
//console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.closest("section")); */

//WARNING ESTE CÓDIGO DEBRÍA GENERAR UN CARD


/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");


$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2)

//GENERANDO LISTA DE ESTACIONES

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul")

document.write("<h3>Estaciones del año</h3>")
document.body.appendChild($ul)

estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//HACIENDO LO MISMO CON INNERHTML con continentes
const continentes = ["America", "Asia", "Europa", "Oceania", "Africa"];
const $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2)
$ul2.innerHTML = "";
continentes.forEach(el=>(
    $ul2.innerHTML += `<li>${el}</li>`
));

//Mostrar en el DOM usando fragmentos
const meses = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Setiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
]
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment()

meses.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el;
    $fragment.appendChild($li)
});

document.write("<h3>Meses del año</h3>")
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */

/* const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),

cardContent = [
        {
            title: "Tecnología",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ]

    cardContent.forEach(el =>{
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template, true)
        $fragment.appendChild($clone);
        
    });

    $cards.appendChild($fragment); */

/* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);//"true"para clonar todo el contenido y no solo la estructura

    $newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;
    $newCard.classList.add("card");
    //$cards.replaceChild($newCard, $cards.children[2]);//agrega la imagen en la posición 2
    //$cards.removeChild($cards.lastElementChild);
    //$cards.insertBefore($newCard, $cards.firstElementChild);//inserta antes del primer hijo
    document.body.appendChild($cloneCards)

 */
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

    let $contentCard =  `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;
    $newCard.classList("card");
    $newCard.insertAdjacentHTML("beforeend", $contentCard)
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
    //$cards.insertAdjacentElement("afterend", $newCard);

    /$cards.prepend($newCard)
 */
/* 
function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}




const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){
    alert("Hola mundo manejador de eventos semántico");
    console.log(e);
    console.log(event)
}
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");
$eventoMultiple.addEventListener("click",(e)=>{
    alert('Manejador de eventos múltiples')
    console.log(e.target);
    console.log(event.type)
})

$eventoMultiple.addEventListener("click", () =>{
    saludar("Rodrigo")
});

const removeDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removeDobleClick);
    $eventoRemover.disabled = true;
}

 $eventoRemover.addEventListener("dblclick",(e)=>{    
    alert( `Removiendo el elemento de tipo ${e.type}`);
    console.log(e);
   
}) 
$eventoRemover.addEventListener("dblclick", removeDobleClick) */
/* function flujosEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    
    //e.stopPropagation()
}

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a")

    document.addEventListener("click", (e)=>{
        console.log(`Click en `, e.target)


        if(e.target.matches(".eventos-flujo div")){
            flujosEventos(e);            
        }
        if(e.target.matches(".eventos-flujo a")){
            alert("Hola viejo es mi nuevo canal");
            e.preventDefault();//cancela el evento por defecto
        }
    });
 */
//console.log($divsEventos)
/* $divsEventos.forEach(div => {
    div.addEventListener("click", flujosEventos)  
})

$linkEventos.addEventListener("click", (e)=>{
    alert("Hola viejo es mi nuevo canal");
    e.preventDefault();//cancela el evento por defecto
}) */
/* window.addEventListener("resize", e =>{
    console.clear()
    console.log("***********Evento Resize************")
    console.log("inner width " + window.innerWidth);
    console.log("innerHeight " +window.innerHeight);
    console.log("outerHeight "+window.outerHeight);
    console.log("outerWidth "+window.outerWidth);
    console.log("scroll X "+window.scrollX);
    console.log("scroll Y "+window.scrollY);
})

window.addEventListener("scroll", e =>{
    console.clear()
    console.log("***********Evento Scroll************")

    console.log("scroll X "+window.scrollX);
    console.log("scroll Y "+window.scrollY);
})

window.addEventListener("load", e => {

    console.log("***********Evento Load************")
    console.log("Screen X "+window.screenX);
    console.log("screen Y "+window.screenY);
    console.log(e)
});

document.addEventListener("DOMContentLoaded", e =>{
 
    console.log("***********DOM content Load************")
    console.log("Screen X "+window.screenX);
    console.log("screen Y "+window.screenY);
    console.log(e)

})
 */
//alert("Alerta")
//confirm("Confirmación")

//VIDEO 78

/* const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

    var ventana;

    $btnAbrir.addEventListener("click", e=>{
        ventana = window.open("https://www.youtube.com/channel/UCQTu0e9VvdyH_rAtfsrdStQ")
    })
    $btnCerrar.addEventListener("click", e=>{
        ventana.close()
    })
    $btnImprimir.addEventListener("click", e=>{
        window.print()
    })
 */
//VIDEO 79

//console.log("*************Objeto URL*********");
//console.log(location); 


//console.log("*************Objeto HISTORY*********")
//console.log(history)
//history.back(int) -> retrocede las veces enviardas al método
//history.fordward(int) --> avanza el número de páginas enviadas al método
//history.go()->avanza o retrocede segpun el tipo del npumeor
console.log("***********Objeto Navigator********")
console.log(navigator)
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);



