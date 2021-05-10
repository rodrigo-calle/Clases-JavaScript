const d = document;
export function shortcuts(e) {
    /*    console.log(e);
       console.log(e.type);
       console.log(e.key);
       console.log(e.keyCode);
       console.log(e.ctrlKey);
       console.log(e.shiftKey);
       console.log(e.altKey);
       if(e.key === "a" && e.altKey){
           alert("Haz lanzado una alerta con el Teclado");
       }
       if(e.key === "c" && e.altKey){
           confirm("Haz lanzado un console con el Teclado");
       }
       if(e.key === "p" && e.altKey){
           prompt("Haz lanzado una aviso con el Teclado");
       } */
}
let x = 0, y= 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();


    const move = (direction) =>{
      
    };

    switch (e.keyCode) {
        case 37:
           // move("left")
           e.preventDefault();
           if(limitsBall.left >= limitsStage.left)x--;
     
            break;
        case 38:
           // move("up")
           e.preventDefault();
           if(limitsBall.top > limitsStage.top)y--;
            break;
        case 39:
            //move("right")
            e.preventDefault();
            if(limitsBall.right < limitsStage.right)x++;
   
            
            break;
        case 40:
           // move("down").
           e.preventDefault();
           if(limitsBall.bottom < limitsStage.bottom)y++;
           
            break;
        default:
            break;
    }
    $ball.style.transform =  `translate(${x*10}px, ${y*10}px)`;
}