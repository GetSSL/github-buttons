//var page = require('webpage').create();
var phantom = require('phantom');
var gm = require('gm');
var express = require('express');
var app = express();
var fs = require('fs');
var marked = require('marked');

// expiration of button cache
var expire = 3600000; // 1 hour

app.get('/', function (req, res) {
    fs.readFile('README.md', 'utf8', function(err, data){
        if (!err) res.send(200, marked(data));
        else res.send(404, "Not Found");
    });
});

app.get('/stars/:user([a-z0-9-_]+)/:repo([a-z0-9-_]+)', function(req, res){

    var user = req.params.user,
        repo = req.params.repo;

    var url = "http://ghbtns.com/github-btn.html?user=" + user + "&repo=" + repo + "&type=watch&count=true";
    var output = "buttons/" + user + "-" + repo + ".png";

    if (fs.existsSync(output)) {
        var stat = fs.statSync(output);
        var now = new Date().getTime();

        if (now < stat.mtime.getTime() + expire) {
            return res.sendfile(output);
        }
    }

    phantom.create(function(ph) {
        ph.createPage(function(page) {
            page.viewportSize = { width: 150, height: 20 };
            page.open(url, function(status) {
                page.render(output, function () {
                    gm(output).trim().write(output, function (err) {
                        if (!err) {
                            res.sendfile(output);
                        } else {
                            res.send(500, "Failed to generate the button");
                        }
                        ph.exit();
                    });
                });
            });
        });
    });
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
