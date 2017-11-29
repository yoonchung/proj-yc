var http = require("http");
var querystring = require("querystring");
var url = require("url");

http.createServer(function(req,res) {

console.log(req.url);
        if (req.method == 'GET') {
          var html = '';
          html += '<!doctype html>\n';
          html += '<head>\n<title>Simple Form</title>\n</head>';
          html += '<body>\n<form action="#" method="POST">';
          html += 'Username: <input type="text" name="username"><br>';
          html += 'Password: <input type="password" name="password"><br>';
          html += '<input type="submit" value="Send"><br>';
          html += '</form></body></html>';

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
           html += "<body>\n<h1>Hi " + msgbody.username +" your password is "+msgbody.password+"</h1>\n";
           html += "</body>\n</html>";

           res.writeHead(200, {"Content-Type" : "text/html"});
           res.end(html);


          });
    } else {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end("<h1>Why U no use example right? /form again yo!</h1>");
      }
        }
).listen(1337);