/**
 * Created by markuslyconhold on 06/03/17.
 */

//request is a modul that can be used for anything.
var request =  require('request');
// cheerio is a jquery manipulation modul
 cheerio = require('cheerio');
 urls = [];

//we use reddit as a test, there is alos a callback function with error, response and body as parameters.
console.log("brr");

request('http://vhost3.lnu.se:20080/weekend', function (err, resp, body){

    console.log("brr");
    //if there is no error
    if(err == false && resp.statusCode == 200){
        //this parses the body in cheerio and make it available for manipulation and we save it to a variable
        // $ which is the most famous thing for cheerio (especially in JQuery).
        var $ = cheerio.load(body);

        //here we use the JQuery selector on the id "siteTable". This will load all links "a" that has the class
        //title in them. And then we search in the context siteTable. We then use .each (from foreach loop) to get the
        //href attributes and we save that in the array, and then we push it on the URl array.

        $('body').each(function(){

             var urls = this.attr('ol');
            urls.push(urls);
          });

        //now we test it.
        console.log(urls);
    }
});
