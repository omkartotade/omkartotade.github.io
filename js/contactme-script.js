$(document).ready(function ()
{
  $(".navbar").hide();
  $(".secondary-title-heading").hide();
  $(".contact-text").hide();
  $(".main-section-email").hide();
  $(".contact-connect").hide();
  $(".footer").hide();
  $(".navbar").fadeIn(1750);
  $(".secondary-title-heading").fadeIn(750);
  $(".contact-text").fadeIn(1000);
  $(".main-section-email").fadeIn(1250);
  $(".contact-connect").fadeIn(1500);
  $(".footer").fadeIn(2000);


  $("#email-button").click(function () {

    var name = $("#name").val();
    var email = $("#email").val();
    var content = $("#content").val();
    var subject = "Personal Website- " + name + "has contacted you!";
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (name === "") {
      console.log("Inside name");
      alert("You have to tell me your name!");
      return false;
    }
    else if (email === "") {
      console.log("Inside email");
      alert("You have to tell me your email address!");
      return false;;
    }
    else if (!(isEmail(email))) {
      alert("Enter a valid email address!");
    }
    else if (content === "") {
      console.log("Inside content");
      alert("Well write something in the content!");
      return false;
    }
    else {
      console.log("Inside last else");
      $("#send-email-form").attr("action",
                         "mailto:ototade@asu.edu?subject=" + subject + "&body=" + email + " says- " + content);
          $("#send-email-form").submit();
          return true;
    }
  });

  function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
  }
});
