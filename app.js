"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) {
                    $('.col-md-12').append(`<div class="minibox"> <h2>${b}</h2> </div>`); 
                }
            }
            let v = f  => Number(f) ? a(f) : $('.col-md-12').append(`<div class="minibox"> <h2>${f}</h2> </div>`); 
            v($('input').val());
            // a($('input').val());
        }

        else {
            return
        }
        $('#inputme').val('');
       
    })


    


    



});  
