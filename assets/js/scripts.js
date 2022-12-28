
function initiateAnimation() {
    AOS.init({
        //  once: true,
        // delay: 500, // values from 0 to 3000, with step 50ms
        // duration: 900, // values from 0 to 3000, with step 50ms
        easing: "ease-out-back" // default easing for AOS animations
    });


} 
function windowSize(){
    if (jQuery(window).width() <= 1190) {
        $('#GalleryModal .modal-dialog').addClass("moadl-xl").removeClass("moadl-lg");
    }else{
        $('#GalleryModal .modal-dialog').addClass("moadl-lg").removeClass("moadl-xl");
    }
}
initiateAnimation();

$(document).ready(function () {

    $('.search-blk input').on("input", function () {
        $(this).parents(".search-blk").find(".search-icon").addClass("active");
        if ($(this).val() == "") {
            $(".search-blk .search-icon").removeClass("active");
        }
    });
    $(document).on("click", ".search-blk .search-icon.active", function () {
        $(this).removeClass("active").parents(".search-blk").find("input").val('');

    });
    if (window.location.hash == "#main-hola") {
        $("#main-home").addClass("d-none");
        $("#main-hola").removeClass("d-none");
    }
    $(document).on("click", ".navbar-brand", function () {
        $("#main-home").removeClass("d-none");
        $("#hola").removeClass("active");
        $("#main-hola").addClass("d-none");
    });
    $(document).on("click", "#hola", function () {
        $("#main-hola").removeClass("d-none");
        $('#main-home').addClass("d-none");
        $("#hola").addClass("active");
    });
    $("#main-home .arrow-fixed a").on("click", function () {
        let section_id = $(this).attr("href");
        $(section_id).removeClass("d-none");
        $('#main-home').addClass("d-none");
        $("#hola").addClass("active");
        $("#main-hola img").removeClass('aos-animate');
        $("#main-hola .text-overlay").removeClass('aos-animate');
        $("#main-hola .arrow-fixed").removeClass('aos-animate');
        setTimeout(function () {
            $("#main-hola img").addClass('aos-animate');
            $("#main-hola .text-overlay").addClass('aos-animate');
            $("#main-hola .arrow-fixed").addClass('aos-animate');

        }, 400);
    });
    $(document).on("click", ".text-controls .read-options", function () {
        $(this).find("span").toggleClass("d-none");
        $(this).parents().find('.text-wrapper').toggleClass("truncated");
    });

    $(document).on("click", ".project-menu li", function () {
        $(".project-menu li").not($(this)).removeClass("active").find(".details").addClass("d-none");
        $(this).toggleClass("active").find(".details").toggleClass("d-none");
        
    });
    $(document).on('click', '.openImgModal', function(e){
        e.preventDefault();
        // Audio Data 
        $(this).addClass("current-img");
        var ImgSource = $(this).attr('data-img'); 
        var ImgCaption = $(this).attr('data-caption'); 
        $('#GalleryModal').find('img').attr("src",ImgSource).removeClass("d-none");
        $('#GalleryModal').find('.caption').text(ImgCaption);
        // Show Modal
        $('#GalleryModal').modal('show');

    });
    $('#GalleryModal').on('hidden.bs.modal', function () {
        $(".openImgModal").removeClass("current-img");
    });
    windowSize()
    jQuery(window).resize(function () {
        windowSize();
    });
});