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
<<<<<<< HEAD
        window.open('/skootar-ui.zip')
=======
        window.open('./skootar-ui.zip')
>>>>>>> parent of ec6a295... 2 Dots
    });
})