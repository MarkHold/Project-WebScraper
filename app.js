/**
 * Created by markuslyconhold on 17/11/16.
 */

/*
var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    // Let's scrape Anchorman 2
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            $('.title_wrapper').filter(function(){
                var data = $(this);
                title = data.children().first().text().trim();
                release = data.children().last().children().last().text().trim();

                json.title = title;
                json.release = release;
            })

            $('.ratingValue').filter(function(){
                var data = $(this);
                rating = data.text().trim();

                json.rating = rating;
            })
        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;

*/
/*
var scrape = function() {

    var request = require('request');
    var cheerio = require('cheerio');

    request('http://vhost3.lnu.se:20080/weekend', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var cher = cheerio.load(html);
            cher('ol').filter(function(){

                var json = { title : "", release : "", rating : ""};
                var data = cher(this);
                var title = data.children().text();
                json.title = title;

                //console.log(things);
               // document.getElementById("ratingSpot").innerText = data;
            })
        }
    });

}
scrape();
*/

var scrape = function() {


//request is a modul that can be used for anything.
    var request =  require('request');

// cheerio is a jquery manipulation modul
    var cheerio = require('cheerio');



    var urls = [];

//we use reddit as a test, there is alos a callback function with error, response and body as parameters.

    request('http://vhost3.lnu.se:20080/weekend', function (err, resp, body){

        //if there is no error
        if(err == false && resp.statusCode == 200){
            //this parses the body in cheerio and make it available for manipulation and we save it to a variable
            // $ which is the most famous thing for cheerio (especially in JQuery).
            var $ = cheerio.load(body);

            //here we use the JQuery selector on the id "siteTable". This will load all links "a" that has the class
            //title in them. And then we search in the context siteTable. We then use .each (from foreach loop) to get the
            //href attributes and we save that in the array, and then we push it on the URl array.

            $('ol').each(function(){

                var urls = this.attribute('li');
                urls.push(url);
            });

            //now we test it.
            console.log("hejhej");
        }
    });


}
scrape();