const d = document;

export default function lottery(ganador){
    let r = [];
    document.querySelectorAll(".item").forEach(el => {
        r.push(el.textContent)
        //console.log( el.textContent)
    })
    let tamanio = r.length;
    //console.log(r)
  
    
    d.addEventListener("click", e =>{
        let random = Math.floor( Math.random() * (tamanio - 0)) + 0;
        //console.log("hola"+random)
        if(e.target.matches(ganador))alert(`EL ganador es ${r[random]}`);
        
    })    
}