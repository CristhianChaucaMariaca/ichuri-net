// $(document).ready(function () {
//     $('#map-sanfrancisco-btn').click(function () { 
//         $('#sucursal-sanfrancisco').fadeIn();
//         $('#close-btn').click(function(){
//             $('#sucursal-sanfrancisco').fadeOut();
//         });
//     });
//     $('#map-sanfrancisco-btn').hover(function () {
//             $('#sanfrancisco-icon').css("transform","rotate(10deg)");   
//         }, function () {
//             $('#sanfrancisco-icon').css("transform","rotate(0deg)");   
//         }
//     );
//     $('#map-sopocachi-btn').hover(function () {
//         $('#sopocachi-icon').css("transform","rotate(-10deg)");   
//     }, function () {
//         $('#sopocachi-icon').css("transform","rotate(0deg)");   
//     });
//     $('#map-santacruz-btn').hover(function () {
//         $('#santacruz-icon').css("transform","rotate(10deg)");   
//     }, function () {
//         $('#santacruz-icon').css("transform","rotate(0deg)");   
//     });

//     // MENU *******************************************************************
//     $('.btn-ver-menu').click(function () { 
//         $('.pagina-izquierda').addClass("pagina-izquierda-2");
//         setTimeout(function(){
//             $('.pagina-derecha').addClass("pagina-derecha-2");
//         },300)
//     });
//     $('.cerrar-menu').click(function () { 
//         $('.pagina-derecha').removeClass("pagina-derecha-2");
//         setTimeout(function(){
//             $('.pagina-izquierda').removeClass("pagina-izquierda-2");
//         },700)
//     });
// });

window.addEventListener('load', inicio);

function inicio(){
    document.getElementById('btn-menu').addEventListener('click', desplegarMenu);
}
    
function desplegarMenu() {
    document.getElementById('navpage').classList.toggle('mostrar-nav');
}
