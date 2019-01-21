$(document).ready(function() {
 
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#Phone').val();
 
    $(".error").remove();
    $(".valid").remove();

    var validPhone=/^\d{10}$/.test(phone);
    if (phone.length < 10) {
      $('#Phone').before('<span class="error">enter valid phone number</span>');
    }else if(!validPhone){
      $('#Phone').before('<span class="error">enter valid phone number</span>');
    }else{
      $('#Phone').before('<span class="valid">valid phone number</span>');
    }

    if (email.length < 1) {
      $('#email').before('<span class="error">This field is required</span>');
    } else {
      var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').before('<span class="error">Enter a valid email</span>');
      }else{
        $('#email').before('<span class="valid">valid email</span>');
      }
    }
  });
 
});