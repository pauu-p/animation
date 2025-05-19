$(document).ready(function(){

    $('#mariposa, #pincel, #libro, #flor, #arriba, #abajo, #izquierda, #derecha').hide();

   
    $('.paso1').click(function(){
        $(this).hide();
        $('#abejita').fadeIn(2000);
        $('#mensaje1').fadeIn(3500);
    });

    
    $('#si').on('click', function(){
        moverAbejitaAlCentro();
    });

   
    $('#no').on('click', function(){
        explotar('#abejita');
        $('#mensaje1').hide();
    });

    $('#mariposa').on('click', function(){
        $('#pancho').fadeIn().css({ position: 'absolute' }).animate({
            width: '300px',
            height: '300px',
            opacity: 1
        }, 800);
        $('#mensaje2').hide();
        $('#mensaje3').delay(2000).fadeIn();
        $('#mensaje4').delay(4000).fadeIn();
        $('#mensaje5').delay(6000).fadeIn();
    });

    $('#si2').on('click', function(){
        $('#mensaje3, #mensaje4, #mensaje5').hide();
        activarControlesMovimiento();
        
    });

    $('#pincel').click(function() {
        window.location.href = 'sub.html';
    });

    $('#no2').click(function(){
        explotar('#abejita2');
        explotar('#pancho');
        $('#arriba, #abajo, #izquierda, #derecha').hide();
    });

});



function moverAbejitaAlCentro() {
    let ventanaw = $(window).width();
    let ventanah = $(window).height();
    let abw = $('#abejita').width();
    let abh = $('#abejita').height();
    let left = (ventanaw - abw) / 2;
    let top = (ventanah - abh) / 2;

    $('#mensaje1').hide();

    $('#abejita').animate({
        width: '300px',
        height: '300px',
        opacity: 0,
        marginTop: '-100px',
        marginLeft: '-100px'
    }, 800, 'swing');

    $('#abejita2').delay(2000).animate({
        left: left + 'px',
        top: top + 'px',
        width: '300px',
        height: '300px',
        opacity: 1,
        marginTop: '-100px',
        marginLeft: '-100px'
    }, 800);

    $('#mensaje2').delay(2000).fadeIn();
    $('#mariposa, #pincel').delay(3500).fadeIn();
}

function explotar(selector) {
    let posicion = $(selector).offset();
    $('#explosion').css({ top: posicion.top, left: posicion.left }).fadeIn(100).delay(500).fadeOut(500);
    $(selector).animate({ opacity: 0 }, 200, function(){
        $(this).hide();
    });
}

function activarControlesMovimiento() {
    
    $('#arriba, #abajo, #izquierda, #derecha').fadeIn();

    let paso = 50;
    $('#arriba').off().click(() => mover('top', -paso));
    $('#abajo').off().click(() => mover('top', paso));
    $('#izquierda').off().click(() => mover('left', -paso));
    $('#derecha').off().click(() => mover('left', paso));
}

function mover(direccion, cantidad){
    let pancho = $('#pancho');
    let pos = pancho.position();
    let anim = {};
    anim[direccion] = (pos[direccion] + cantidad) + 'px';
    pancho.animate(anim, 300);
}




