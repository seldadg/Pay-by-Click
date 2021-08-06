
$(function () {
$(".btn-b").slice(0, 10).show();
$("body").on('click touchstart', '.load-more', function (e) {
    e.preventDefault();
    $(".btn-b:hidden").slice(0, 10).slideDown();
    if ($(".btn-b:hidden").length == 0) {
        $(".load-more").css('visibility', 'hidden');
    }
});
});


$(function () {
$(".btn-b-f").slice(0, 5).show();
$("body").on('click touchstart', '.load-more-f', function (e) {
    e.preventDefault();
    $(".btn-b-f:hidden").slice(0, 5).slideDown();
    if ($(".btn-b-f:hidden").length == 0) {
        $(".load-more-f").css('visibility', 'hidden');
    }
});
});
