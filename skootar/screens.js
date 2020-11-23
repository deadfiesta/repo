'use strict'

$(document).ready(function () {
    $('.screen-container').hover(function() {
        $(this).find('.hint').toggleClass('reveal')
    })
    $('.screen').click((e) => {
        var url = e.target.getAttribute('src');
        window.open(url, "_blank");
    })
    $('.download').click(() => {
        window.open('../skootar-ui.zip')
    });
})