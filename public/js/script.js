window.addEventListener('load', inicio);

function inicio(){
    /* Animacion loader */
    desaparecerLoader();
    
    /* Evento menu */
    document.getElementById('btn-menu').addEventListener('click', desplegarMenu);
}
    
function desaparecerLoader(){
    document.getElementById("loader").style.transition="10s";
    document.getElementById("loader").style.visibility="hidden";

    document.getElementById("loader").style.display= "none";
}
function desplegarMenu() {
    document.getElementById('navpage').classList.toggle('mostrar-nav');
}
