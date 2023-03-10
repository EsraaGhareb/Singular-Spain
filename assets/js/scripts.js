function initiateAnimation() {
  AOS.init({
    //  once: true,
    // delay: 500, // values from 0 to 3000, with step 50ms
    // duration: 900, // values from 0 to 3000, with step 50ms
    easing: "ease-out-back", // default easing for AOS animations
  });
}
function windowSize() {
// change cta-3 width 
$(".call-to-actions-items .cta-3").css("min-width", $(".call-to-actions-items .cta-1").outerWidth() );

//Projects page --> change gallery modal width 
  if (jQuery(window).width() >= 1540) {
    $("#GalleryModal .modal-dialog")
      .addClass("modal-xl")
      .removeClass("modal-lg");
  } else if (jQuery(window).width() <= 1540 && jQuery(window).width() >= 1100) {
    $("#GalleryModal .modal-dialog")
      .addClass("modal-lg")
      .removeClass("modal-xl");
  } else {
    $("#GalleryModal .modal-dialog")
      .addClass("modal-md")
      .removeClass("modal-xl")
      .removeClass("modal-lg");
  }

}
initiateAnimation();

$(document).ready(function () {
  setTimeout(function(){
    $(".arrow-fixed").removeClass("opacity-0").addClass("fade-animate");
  }, 1000);
  setTimeout(function(){
    $("#main-home .call-to-actions-items .cta-1").removeClass("opacity-0").addClass("fade-animate");
    $("#main-home .call-to-actions-items .cta-2").removeClass("opacity-0").addClass("fade-animate");
    $("#main-home .call-to-actions-items .cta-3").removeClass("opacity-0").addClass("fade-animate");
  }, 2500);
  setTimeout(function(){
    $("#main-home .text-overlay").removeClass("opacity-0").addClass("fade-animate");
  }, 800);
  // search Box in header
  $(".search-blk input").on("input", function () {
    $(this).parents(".search-blk").find(".search-icon").addClass("active");
    if ($(this).val() == "") {
      $(".search-blk .search-icon").removeClass("active");
    }
  });
  $(document).on("click", ".search-blk .search-icon.active", function () {
    $(this).removeClass("active").parents(".search-blk").find("input").val("");
  });
  $(document).on("click", ".search-blk .search-mobile", function () {
    $(this).parents(".search-blk").find("input").toggleClass("d-none");
    $(this).parents(".search-blk").find(".search-icon").toggleClass("d-none");
  });
// end Search
// Hola effect 
  if (window.location.hash == "#main-hola") {
    $(".main-hola").addClass("extrnal-animate");
    $("#hola").addClass("active");
    $("#main-home").addClass("opacity-0").removeClass("layered-home");
  }
  $(document).on("click", "#hola", function () {
    $("#hola").addClass("active");
    // if user clicked hola from home
    if ($("#main-home").length) {
      // setTimeout(function () {
      $(".main-hola").addClass("animated");
      // }, 400);
      $("#main-home").removeClass("layered-home");
    } else {
      $("#main-home").addClass("opacity-0");
      $(".main-hola").addClass("extrnal-animate");
    }
  });
// if user clicked hola's arrow from home
  $("#main-home .arrow-fixed a").on("click", function () {
    let section_id = $(this).attr("href");
    $("#hola").addClass("active");   
    $(".main-hola").addClass("animated");
    $("#main-home").removeClass("layered-home");
  });

// if user back to main-home form hola
  $(document).on("click", ".navbar-brand", function () {
    $("#hola").removeClass("active");
  });
// Read more Options
  $(document).on("click", ".text-controls .read-options", function () {
    $(this).find("span").toggleClass("d-none");
    $(this).parents().find(".text-wrapper").toggleClass("truncated");
  });
// Projects page ex:la mancha
// Projects list 
  $(document).on("click", ".project-menu li", function () {
    $(".project-menu li")
      .not($(this))
      .removeClass("active")
      .find(".details")
      .addClass("d-none");
    $(this).toggleClass("active").find(".details").toggleClass("d-none");
  });
// Images Grid
  $(document).on("click", ".openImgModal", function (e) {
    e.preventDefault();
    $(this).addClass("current-img");
    var ImgSource = $(this).attr("data-img");
    var ImgCaption = $(this).attr("data-caption");
    $("#GalleryModal").find("img").attr("src", ImgSource).removeClass("d-none");
    $("#GalleryModal").find(".caption").text(ImgCaption);
    // Show Modal
    $("#GalleryModal").modal("show");
  });
  $("#GalleryModal").on("hidden.bs.modal", function () {
    $(".openImgModal").removeClass("current-img");
  });
  windowSize();
  jQuery(window).resize(function () {
    windowSize();
  });
});
 