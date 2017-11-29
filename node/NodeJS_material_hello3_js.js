var http = require("http");
var path = require("path");
var fs = require("fs");

var extensions = {
        ".html" : "text/html",
        ".css"  : "text/css",
        ".js"   : "application/javascript",
        ".png"  : "image/png",
        ",gif"  : "image/gif",
        ".jpg"  : "image/jpeg"
};

http.createServer(function(req,res) {

console.log("starting");

        var filename = path.basename(req.url) || "index.html";

console.log(filename)
        var ext = path.extname(filename);
        var dir = path.dirname(req.url).substring(1);  // new to handle sub directories
        var localPath = __dirname + "/html_files/";

console.log(localPath);

        if (extensions[ext]) {
          localPath += (dir ? dir + "/" : "") + filename;
        }

console.log("read file");

        fs.exists(localPath, function(exists) {
                if (exists) {
                  getFile(localPath,extensions[ext],res)
                } else {
                  res.writeHead(404);
                  res.end();
                }

        });
}).listen(1337);

function getFile(localPath, mimeType, res) {
        fs.readFile(localPath, function(err, contents) {
            if (!err) {
              res.writeHead(200, {
                "Content-Type" : mimeType,            // writing out the MIME type now
                "Content-Length" : contents.length
              });
                  res.end(contents);
            } else {
                  res.writeHead(500);
                  res.end();
            }
        });
}
