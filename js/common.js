$('main').load('seoul_01.html');
$('sub1').load('gyeonggi_01.html');
$('sub2').load('incheon_01.html');

let idx=0;
$('.main-button nav ul li a button').click(function(){
    event.preventDefault();
    let pageUrl = $(this).attr('href');
    $('main').load(pageUrl);

    
    $('.main-button nav ul li a button').eq(idx).removeClass('active');
    $(this).addClass('active');

    idx = $(this).index();
});

$('.main-button nav ul li a button').click(function(){
    event.preventDefault();
    let pageUrl = $(this).attr('href');
    $('sub1').load(pageUrl);

    
    $('.main-button nav ul li a button').eq(idx).removeClass('active');
    $(this).addClass('active');

    idx = $(this).index();
});
    
$('.main-button nav ul li a button').click(function(){
    event.preventDefault();
    let pageUrl = $(this).attr('href');
    $('sub2').load(pageUrl);

    
    $('.main-button nav ul li a button').eq(idx).removeClass('active');
    $(this).addClass('active');

    idx = $(this).index();
});