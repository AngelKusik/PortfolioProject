"use strict";
(function () {
     // FOOTER
    //Dinamically getting the value of "year" for the footer
    $('#year').text(new Date().getFullYear());

    function Start() {
        console.log("App Started Successfully");
    }
    window.addEventListener("load", Start);

})()