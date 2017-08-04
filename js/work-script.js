function main()
{
  $(".navbar").hide();
  $(".secondary-title-heading").hide();
  $("#section-1").hide();
  $("#section-2").hide();
  $("#section-3").hide();
  $(".footer").hide();
  $(".navbar").fadeIn(2000);
  $(".secondary-title-heading").fadeIn(750);
  $("#section-1").fadeIn(1000);
  $("#section-2").fadeIn(1250);
  $("#section-3").fadeIn(1500);
  $(".footer").fadeIn(1750);
}

$(document).ready(main);
