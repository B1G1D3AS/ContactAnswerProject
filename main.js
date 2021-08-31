$(document).ready(function(){
	$('.header').height($(window).height());
})


var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

var form = document.getElementById("formAwesome");
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    $('#formModal').modal('hide');
    $('#btnStart').hide();
    $('#message').show();
}

 