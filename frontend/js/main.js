$(".sidebar ol li").on('click', function (){
    $(".sidebar ol li.active").removeClass('active');
    $(this).addClass('active');
});
$('.open-btn').on('click', function(){
    $('.sidebar').addClass('active');
});
$('.close-btn').on('click', function(){
    $('.sidebar').removeClass('active');
});


