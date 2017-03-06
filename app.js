
//request is a modul that can be used for anything.
var request =  require('request');
// cheerio is a jquery manipulation modul
cheerio = require('cheerio');
urls = [];

//we use reddit as a test, there is alos a callback function with error, response and body as parameters.

request('http://www.reddit.com', function (err, resp, body){

    //if there is no error
    if(!err && resp.statusCode == 200){
        //this parses the body in cheerio and make it available for manipulation and we save it to a variable
        // $ which is the most famous thing for cheerio (especially in JQuery).

        var $ = cheerio.load(body);

        //here we use the JQuery selector on the id "siteTable". This will load all links "a" that has the class
        //title in them. And then we search in the context siteTable. We then use .each (from foreach loop) to get the
        //href attributes and we save that in the array, and then we push it on the URl array.

        $('a.title', '#siteTable').each(function(){

            var url = $(this).attr('href');
            urls.push(url);
        });

        //now we test it.
        console.log(urls);
    }
});
