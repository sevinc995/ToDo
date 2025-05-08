"use strict";
$(document).ready(function () {

$('h1').click(function (e) {
    e.preventDefault();
    $('h1').html("HELLO");
});

$('.btn').click(function (e) {
    e.preventDefault();
    
    let a = (a) => {
        for (let i = a; i <=a; i++) {
            $('.col-md-12').append(`<div class="minibox"> <h1>${i}</h1> </div>`);
        }
    }

    a($('input').val())

    
});

});