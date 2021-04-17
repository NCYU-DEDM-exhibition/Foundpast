/*-----錨點-----*/
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top
                    },
                    1000
                );
                return false;
            }
        }
    });
});


/*-----導覽列-----*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#bar_bg').fadeIn();
    } else {
        $('#bar_bg').fadeOut();
    }
});

/*-----按鈕列-----*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#btn_bar').fadeIn();
    } else {
        $('#btn_bar').fadeOut();
    }
});


/*-----loading-----*/

let spinnerWrapper = document.querySelector('.loading_wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});