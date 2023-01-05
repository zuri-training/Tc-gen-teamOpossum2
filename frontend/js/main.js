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


//api_call function
let date = document.getElementById("date").value; //last update date
let company = document.getElementById("company").value;  //company information
let country = document.getElementById("country").value; // comapny country
let list = "LIST";   //list of services
let website_url = document.getElementById("website_url").value; //website url
let website_contact_url = website_url+"/contact"; //website contact page url
let website_contact_email = document.getElementById("website_contact_email").value; //website contact email

let app_url = document.getElementById("app_url").value; //app url
let facebook_url = document.getElementById("facebook_url").value; //facebook url
if(website_url==="" && app_url !== ""){
    website_url = app_url;
}else if(website_url === "" && facebook_url !== ""){
    website_url = facebook_url;
}else{
    website_url = "NO VALID ADDRESS GIVEN";
}

function api_call(){

    var form_values = {
        date: date,
        company: company,
        country: country,
        list: list,
        webUrl: website_url,
        contactMail: website_contact_email,
        contactPage: website_contact_url,

    }
    $.ajax({
        url : "/generate/pp-gen",
        type: "POST",
        data : form_values,
        datatype: "JSON",
        success: function(response){

            if(response==201 ||  response == 200){

                //Link to download document
                
                window.open("download/pp.doc", "_self");            
            }else{
                alert('nothing good');
            }
        }

    });
}

$('.next1').on('click', function(){
    $('#information').addClass('show');
    $(this).removeClass('hidden');
    $('#uses').addClass('hidden');
    $('#uses').removeClass('show');
});
$('.back1').on('click', function(){
    $('#uses').addClass('show');
    $(this).removeClass('hidden');
    $('#information').addClass('hidden');
    $('#information').removeClass('show');

});
$('.next2').on('click', function(){
    $('#collection').addClass('show');
    $(this).removeClass('hidden');
    $('#information').addClass('hidden');
    $('#information').removeClass('show');

});
$('.back2').on('click', function(){
    $('#information').addClass('show');
    $(this).removeClass('hidden');
    $('#collection').addClass('hidden');
    $('#collection').removeClass('show');

});
$('.next3').on('click', function(){
    $('#collection2').addClass('show');
    $(this).removeClass('hidden');
    $('#collection').addClass('hidden');
    $('#collection').removeClass('show');

});
$('.back3').on('click', function(){
    $('#collection').addClass('show');
    $(this).removeClass('hidden');
    $('#collection2').addClass('hidden');
    $('#collection2').removeClass('show');

});
$('.next4').on('click', function(){
    $('#use_of').addClass('show');
    $(this).removeClass('hidden');
    $('#collection2').addClass('hidden');
    $('#collection2').removeClass('show');

});

$('.back4').on('click', function(){
    $('#collection2').addClass('show');
    $(this).removeClass('hidden');
    $('#use_of').addClass('hidden');
    $('#use_of').removeClass('show');

});
$('.next5').on('click', function(){
    $('#disclosure').addClass('show');
    $(this).removeClass('hidden');
    $('#use_of').addClass('hidden');
    $('#use_of').removeClass('show');

});
$('.back5').on('click', function(){
    $('#use_of').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure').addClass('hidden');
    $('#disclosure').removeClass('show');

});
$('.next6').on('click', function(){
    $('#disclosure2').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure').addClass('hidden');
    $('#disclosure').removeClass('show');

});
$('.back6').on('click', function(){
    $('#disclosure').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure2').addClass('hidden');
    $('#disclosure2').removeClass('show');

});
$('.next7').on('click', function(){
    $('#disclosure3').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure2').addClass('hidden');
    $('#disclosure2').removeClass('show');

});
$('.back7').on('click', function(){
    $('#disclosure2').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure3').addClass('hidden');
    $('#disclosure3').removeClass('show');

});
$('.next8').on('click', function(){
    $('#right').addClass('show');
    $(this).removeClass('hidden');
    $('#disclosure3').addClass('hidden');
    $('#disclosure3').removeClass('show');

});
$('.back8').on('click', function(){
    $('#disclosure3').addClass('show');
    $(this).removeClass('hidden');
    $('#right').addClass('hidden');
    $('#right').removeClass('show');

});
$('.next9').on('click', function(){
    $('#right2').addClass('show');
    $(this).removeClass('hidden');
    $('#right').addClass('hidden');
    $('#right').removeClass('show');

});
$('.back9').on('click', function(){
    $('#right').addClass('show');
    $(this).removeClass('hidden');
    $('#right2').addClass('hidden');
    $('#right2').removeClass('show');

});
$('.next10').on('click', function(){
    $('#details').addClass('show');
    $(this).removeClass('hidden');
    $('#right2').addClass('hidden');
    $('#right2').removeClass('show');

});
$('.back10').on('click', function(){
    $('#right2').addClass('show');
    $(this).removeClass('hidden');
    $('#details').addClass('hidden');
    $('#details').removeClass('show');

});
$('.next11').on('click', function(){
    $('#details2').addClass('show');
    $(this).removeClass('hidden');
    $('#details').addClass('hidden');
    $('#details').removeClass('show');

});
$('.back11').on('click', function(){
    $('#details').addClass('show');
    $(this).removeClass('hidden');
    $('#details2').addClass('hidden');
    $('#details2').removeClass('show');

});
$('.next12').on('click', function(){
    $('#datils3').addClass('show');
    $(this).removeClass('hidden');
    $('#details2').addClass('hidden');
    $('#details2').removeClass('show');

});
$('.back12').on('click', function(){
    $('#datails2').addClass('show');
    $(this).removeClass('hidden');
    $('#details3').addClass('hidden');
    $('#details3').removeClass('show');

});


