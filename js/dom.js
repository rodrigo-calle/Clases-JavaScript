/*   let nombre = "Rodrigo"
        //let text = `hola ${nombre} bienvenido esta es tu pagina Tecgeniuslab`
        //let texto = "Hi my name is Rodrigo I'm from Peru but I live in Oxapampa"
        const hablar = (texto) =>speechSynthesis.
        speak(new SpeechSynthesisUtterance(texto));

        hablar(texto); 
 */
console.log("****************Elementos del Documento***************")
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



