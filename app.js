var http = require('http'),
    url = require('url'),
    fs = require('fs');


http.createServer(function (req, res) {
    var urlParts = url.parse(req.url);
    switch(urlParts.pathname) {
        case "/":
            showPage(req, res);
            break;
        case "/games":
            showPage(req, res)
            break
        case "/contact":
            showPage(req, res)
            break
        case "/mentions-legales":
            showPage(req, res)
            break
        case "/game/trackmania":
            showPage(req, res)
            break
        case "/game/minecraft":
            showPage(req, res)
            break
        case "/game/fortnite":
            showPage(req, res)
            break
        case "/game/geoguesser":
            showPage(req, res)
            break
        case "/game/fallguys":
            showPage(req, res)
            break
        case "/game/osu":
            showPage(req, res)
            break
            
        default:
            notfound(req,res);
            break;
    }
}).listen(80);

function showPage(req, res) {
    fs.readFile('/home/dutcheb/brolanSixthEdition/public/index.html', function (err, html) {
        if (err) {
            throw err;
        } 
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });
}
 
function notfound(req, res) {
    res.writeHeader(302, {"Location": "/"});
    res.end();
}
