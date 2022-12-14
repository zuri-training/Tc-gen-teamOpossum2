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
let website_contact_url = website_url+"/contact"; //website contact page url
let website_contact_email = document.getElementById("website_contact_email").value; //website contact email
let website_url = document.getElementById("website_url").value; //website url
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