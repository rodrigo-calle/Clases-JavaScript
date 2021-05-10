export default function buttonsClock(startC, clock, stopClock, audioClock,  startAlarm, stopAlarm){
    const d = document;
    
    d.addEventListener("click", e=>{
        if(e.target.matches(startC)){
            d.querySelector(clock).classList.toggle("show-clock");
            d.querySelector(startC).setAttribute("disabled", "")

            setInterval(()=>{
                let time = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML =`<h3>${time}</h3>`       
            },1000)   ;
            
        }      
        if(e.target.matches(stopClock)){
            d.querySelector(clock).classList.remove("show-clock");          
            d.querySelector(startC).removeAttribute("disabled");
        }
        if(e.target.matches(startAlarm)){
            d.querySelector(audioClock).play();
            d.querySelector(startAlarm).setAttribute("disabled","")
            console.log("que suene la musicaa!")
        }
        if(e.target.matches(stopAlarm)){
            d.querySelector(audioClock).pause();
            d.querySelector(startAlarm).removeAttribute("disabled")
            console.log("pause audio")          
        }
    })

}

