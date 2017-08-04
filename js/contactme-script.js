function main()
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
}

$(document).ready(main);
