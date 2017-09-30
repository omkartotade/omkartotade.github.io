function main()
{
  //aboutme.html
  $(".navbar").hide();
  $(".secondary-title-heading").hide();
  $(".img-section").hide();
  $("#text-section-head").hide();
  $(".text-section").hide();
  $(".footer").hide();
  $(".navbar").fadeIn(1750);
  $(".secondary-title-heading").fadeIn(750);
  $(".img-section").fadeIn(1000);
  $("#text-section-head").fadeIn(1250);
  $(".text-section").fadeIn(1500);
  $(".footer").fadeIn(2000);
}


$(document).ready(main);
