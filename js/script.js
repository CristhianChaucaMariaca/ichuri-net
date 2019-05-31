$(document).ready(function () {
    $('#map-sanfrancisco-btn').click(function () { 
        $('#sucursal-sanfrancisco').fadeIn();
        $('#close-btn').click(function(){
            $('#sucursal-sanfrancisco').fadeOut();
        });
    });
    $('#map-sanfrancisco-btn').hover(function () {
            $('#sanfrancisco-icon').css("transform","rotate(10deg)");   
        }, function () {
            $('#sanfrancisco-icon').css("transform","rotate(0deg)");   
        }
    );
    $('#map-sopocachi-btn').hover(function () {
        $('#sopocachi-icon').css("transform","rotate(-10deg)");   
    }, function () {
        $('#sopocachi-icon').css("transform","rotate(0deg)");   
    });
    $('#map-santacruz-btn').hover(function () {
        $('#santacruz-icon').css("transform","rotate(10deg)");   
    }, function () {
        $('#santacruz-icon').css("transform","rotate(0deg)");   
    });
});