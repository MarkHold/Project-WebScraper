/**
 * Created by markuslyconhold on 17/11/16.
 */

var Scraper = function (){

    var request = require("request");
    var SubmitButton = document.getElementById("linkButton");


    var UrlLocation;
    var URL;

    /* Function that saves the provided link by the user*/

    SubmitButton.onclick = function(){
        UrlLocation = document.getElementById("linkArea").value;
        console.log(UrlLocation);
    }

    

}

Scraper();