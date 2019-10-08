$(document).ready(function(){

  /** smooth scroll */
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
  
        window.location.hash = hash;
      });
    }
  });

  $(".animated").scrollClass();
 
  /** change displaying content */
  $(".part-reflection").hide();
  $(".desc ul li").click(function(event){
    event.preventDefault();
    if ($(this).text()=="Reflection"){
      $(".description").hide();
      $(".part-reflection").fadeIn();
    } else {
      $(".description").fadeIn();
      $(".part-reflection").hide();
    }
  });

  $("#part-b").hide();
  $("#part-c").hide();

  var currentPage = "part-a";

  $("#next").click(function(){
    // event.preventDefault();
    if (currentPage == "part-a") {
      $("#part-a").hide();
      $("#part-c").hide();
      $("#part-b").fadeIn();
      currentPage = "part-b";
    } else if (currentPage == "part-b") {
      $("#part-a").hide();
      $("#part-b").hide();
      $("#part-c").fadeIn();
      currentPage = "part-c";
    }
  });
  $("#pre").click(function(event){
    event.preventDefault();
    if (currentPage == "part-c") {
      $("#part-c").hide();
      $("#part-b").fadeIn();
      currentPage = "part-b";
    } else if (currentPage == "part-b") {
      $("#part-b").hide();
      $("#part-a").fadeIn();
      currentPage = "part-a";
    }
  });

  $("nav ul").hide();
  
  
});

