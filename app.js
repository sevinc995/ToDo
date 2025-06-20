"use strict";
$(document).ready(function () {

// $('.btn').click(function (e) {
//     e.preventDefault();
    
//     let a = (a) => {
//         if (!isNaN ($("#inputme").val()) || isNaN ($("#inputme").val()) && !$.trim($("#inputme").val()) == ' ')
//             for (let i = a; i <= a; i++) {
//                 $('.col-md-12').append(`<div class="minibox"> <h1>${i}</h1> </div>`);
//             }
//     }

//     a($('input').val())
//     $("#inputme").val("")
    
// });

    $('.btn').click(function (e) {
        e.preventDefault();

        if (!$.trim($('#inputme').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) {$('.minibox').append(`<h2>${b}</h2>`); }
            }
            // let v = f => !isNaN ($("#inputme").val()); {$('.minibox').append(`<h2>${b}</h2>`); }
            // v($('#inputme').val());
        }
        // b($('input').val())
        // f($('input').val())
        $('#inputme').val('');
       
    });



});  
