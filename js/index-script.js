function main()
{
  //index.html
  $(".title-heading").hide();
  $(".navbar").hide();
  $(".img-div").hide();
  $(".para-div").hide();
  $(".connect h2").hide();
  $(".social-media").hide();
  $(".footer").hide();
  $(".title-heading").fadeIn(750);
  $(".navbar").fadeIn(1000);
  $(".img-div").fadeIn(1250);
  $(".para-div").fadeIn(1500);
  $(".connect h2").fadeIn(1750);
  $(".social-media").fadeIn(2000);
  $(".footer").fadeIn(2250);
  //
}

$(document).ready(main);
