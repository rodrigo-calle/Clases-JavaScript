const d = document;
const ls = localStorage;
export default function darkTheme(btn, classDark){  
    const $themeBtn = document.querySelector(btn),
        $selectores = d.querySelectorAll("[data-dark]");
    //selectores son atributos que no forman parte del id o class de 
    //las etiquetas HTML
        console.log($selectores)

        let moon = "🌙",
            sun ="🌞";

        const lightMode = ()=>{
            $selectores.forEach((el)=> el.classList.remove(classDark));
            $themeBtn.textContent = moon;
            ls.setItem("theme", "light");

        }
        const darkMode = () =>{
            $selectores.forEach((el) => el.classList.add(classDark));
            $themeBtn.textContent = sun;
            ls.setItem("theme", "dark");
        }

        d.addEventListener("click", (e)=>{
           
            if(e.target.matches(btn)){
                console.log($themeBtn)
                if($themeBtn.textContent === moon){
                    darkMode();
                }else{
                    lightMode();
                }
            }
        })
        //no se pueden cargar dos veces DOMContenLoaded
        d.addEventListener("DOMContentLoaded", (e)=>{
            if(ls.getItem("theme") === null)ls.setItem("theme", "light");
            if(ls.getItem("theme") === "light")lightMode();
            if(ls.getItem("theme") === "dark")darkMode();

        });
}
