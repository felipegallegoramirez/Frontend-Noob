let register = document.querySelector(".principal-Section__Register")
let login = document.querySelector(".principal-Section__Login")
let Aregister = document.querySelector(".Register")
let ALogin = document.querySelector(".Login")

let estado=1

let fondo= document.querySelector(".principal-Section__Decoration__img");

function ejecutar () {
fondo.classList.add("FondoA")
fondo.addEventListener("animationstart", Animacion_Items);
fondo.addEventListener("animationend", Eliminar_Clases);
}

function Animacion_Items (){
    if (estado==1){
        login.classList.add("ElementA")
        login.classList.remove("ElementB");
        register.classList.add("ElementB");
        register.classList.remove("ElementBI");
        register.classList.remove("ElementA");
        estado=2;
    }
    else {
        register.classList.add("ElementA")
        register.classList.remove("ElementB");
        login.classList.add("ElementB");
        login.classList.remove("ElementA");
        estado=1;
    }
}
function Eliminar_Clases (){
    fondo.classList.remove("FondoA");
}


Aregister.addEventListener("click",ejecutar)
ALogin.addEventListener("click",ejecutar)