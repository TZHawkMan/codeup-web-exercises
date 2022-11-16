"use strict";
(function() {

    // $(function () {
    //     alert('The DOM has finished loading!');
    // });

    // id selector
     $('document').ready(function() {

         //     var contents = $('#9').html();
         //     alert(contents);
         // });


         //class selector


         //$('.codeup').css('border', '1px').css('background-color', '#ff0000');

     //element selectors
     //     $('li').css('background-color', 'yellow').css('font-size', '20px');
     //     $('p').css('background-color', 'yellow');
     //     $('h1').css('background-color', 'yellow')
     //     var contents = $('h1').html();
     //     alert(contents);


     // mutiple selectors
     // $(" li, p,h1").css( 'background-color','blue');

         $('h1').click(function() {
             $('h1').css('background-color', 'green');

         });
        $('p').dblclick(function(){
            $('p').css('font-size','18px');
        });


         $('li').hover(
             function() {
                 $(this).css('color', 'red');
             },
             function() {
                 $(this).css('color', 'black');
             }
         );




      })


})()

