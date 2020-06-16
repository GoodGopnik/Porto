$('.mini-menu').click(function() {
    $(this).toggleClass('active');
    $('nav ul').toggleClass('show');
}); 
$('nav a').click(function(e) {
    e.preventDefault();
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top  
    },600);
});
$('.up').click(function(){
    $('html, body').animate({
        scrollTop: 0  
    },600)
});
$('.single-item').slick({
    arrows: true
});

// // $('.slider-service').slick();
// $('.slider-service').slick({
//     arrows:true,
//     dots:false
// });