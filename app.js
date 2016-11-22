/**
 * Created by markuslyconhold on 17/11/16.
 */

var scrape = function() {
    
    var request = require('request');
    var express = require('express');
    var cheerio = require('cheerio');
    var app = express();

    var firstLink;
    var secondLink;
    var thirdLink;
    var json = {firstLink: "", secondLink: "", thirdLink: ""};

    var SubmitButton = document.getElementById("linkButton");


    var UrlLocation;
    var url;

    //Function that saves the provided link by the user

    SubmitButton.onclick = function () {
        UrlLocation = document.getElementById("linkArea").value;
        url = UrlLocation;
        console.log(UrlLocation);
    }

    //The function for the scraping

    app.get('/scrape', function (req, res) {

        //this is the callback function
        request(url, function (error, response, html) {


            //error handling first
            if (error === false) {

                //here we use cheerio on the html that we get returned to give us the jquery functional

                var cher = cheerio.load(html);

                //We choose the thing that is closest to the object we are looking to obtain
                //in this case, it was the OL (ordered list)
                cher('.ol').filter(function () {

                    //we store the data we scrape in this variable.
                    var data = cher(this);

                    //process to take out the link for the first section
                    firstLink = data.children().first().text();

                    //same process for the last link
                    thirdLink = data.children().first().text();


                    //now we store it in the json object
                    json.firstLink = firstLink;
                    json.thirdLink = thirdLink;
                })
            }

        })

    })

}
scrape();
