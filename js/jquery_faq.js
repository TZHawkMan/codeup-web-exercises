"use strict"

$('document').ready(function() {
    $('dd').click(function(event) {
        event.preventDefault();
        $('dd').addClass('invisible').css('visibility','hidden');

    });
});

