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
$('#website').click(function() {
    if( $(this).is(':checked')) {
    $("#div_website").removeClass('hidden');
    $(this).addClass('show');
}else{
    $("#div_website").addClass('hidden');
    $(this).removeClass('show');
}
});
$('#app').click(function() {
    if( $(this).is(':checked')) {
    $("#div_app").removeClass('hidden');
    $(this).addClass('show');
}else{
    $("#div_app").addClass('hidden');
    $(this).removeClass('show');
}
});
$('#facebook').click(function() {
    if( $(this).is(':checked')) {
    $("#div_facebook").removeClass('hidden');
    $(this).addClass('show');
}else{
    $("#div_facebook").addClass('hidden');
    $(this).removeClass('show');
}
});


