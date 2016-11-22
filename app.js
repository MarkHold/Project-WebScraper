/**
 * Created by markuslyconhold on 17/11/16.
 */

var scrape = function() {
    
    var request = require('request');
    var express = require('express');
    var cheerio = require('cheerio');
    var app = express();

    var title;
    var release;
    var rating;
    var json = {title: "", release: "", rating: ""};

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

                //the variables that we want to print out


                //We choose the thing that is closest to the object we are looking to obtain
                //in this case, it was the OL (ordered list)
                cher('.ol').filter(function () {

                    //we store the data we scrape in this variable.
                    var data = $(this);

                    //noticing that the data we need is in the first child, we use jquery to locate it
                    title = data.children().first().text();

                    //same process for release date
                    release = data.children().last().children().text();


                    //now we store it in the json object
                    json.release = release;
                    json.title = title;
                })

                //we write a new filter function since the rating is in a different section of the DOM.
                cher('.star-box-giga-star').filter(function () {
                    var data = cher(this);

                    //since the star box etc class is exactly where it is, we just need to get the text()
                    rating = data.text();

                    json.rating = rating;

                })

            }

        })

    })

}
scrape();
