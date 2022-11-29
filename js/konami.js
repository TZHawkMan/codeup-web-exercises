"use strict";
(function () {
    let cheatCode=[]
    let keyCode = [38,38,40,40,37,39,37,39,66,65,13]
    //keyCodes = [up,up,down,down,left,right,left,right,b,a,enter]





        $(document).keyup(function(event) {
            console.log(event.keyCode);
            cheatCode.push(event.keyCode)
            cheatCode.splice(-keyCode.length -1, cheatCode.length - keyCode.length)
            console.log(cheatCode)

            if(cheatCode.join('').includes(keyCode.join(''))) {
                alert('You have added 30 lives')

            }
        });

























})();