var http = require("http");
var querystring = require("querystring");
var url = require("url");
// To read html for form
var fs = require('fs');

http.createServer(function(req,res) {
console.log(req.url);
        if (req.method == 'GET' && req.url == '/') {
          fs.readFile('index.html', function (err, data) {
            if (!err) {
              res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
              });
              res.write(data);
              res.end();
            } else {
                  res.writeHead(500);
                  res.end();
            }
          });
        } else if (req.method == 'GET') {
          var query = url.parse(req.url,true).query;
          // res.end(JSON.stringify(query));
          var html = '';
          html += '<!doctype html>\n';
          html += '<head>\n<title>Simple Form</title>\n</head>';
          html += '<body>\nHello ' + query.first + ' ' + query.last + ' from a Web app written in node.js on ';
          html += "<script type='text/javascript'>document.write(new Date().toLocaleString());</script>\n";
          html += '<style> body { background: '+ query.color + '; } </style>';
          html += '</body></html>';

          res.writeHead(200, {"Content-Type" : "text/html"});
          res.end(html);
        } else if (req.method == 'POST') {
           console.log('Read that post');

           // Danger danger ... you really shouldn't be trying to writing a Web server from scratch 
           var body = '';
           req.on('data', function (data) {
             body += data;
           });
           req.on('end', function () {

            var msgbody = querystring.parse(body);
console.log(msgbody);
             var html = "";

             html += "<!doctype html>\n<html>\n<head>\n<title>Echo Time</title>\n</head>\n";
             html += '<body>\nHello ' + msgbody.first + ' ' + msgbody.last + ' from a Web app written in node.js on ';
             html += "<script type='text/javascript'>document.write(new Date().toLocaleString());</script>\n";
             html += '<style> body { background: '+ msgbody.color + '; } </style>';
             html += '</body></html>';

             res.writeHead(200, {"Content-Type" : "text/html"});
             res.end(html);


          });
    } else {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end("<h1>Why U no use example right? /form again yo!</h1>");
      }
        }
).listen(1337);
