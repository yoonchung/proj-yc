const http = require('http'); // Loads the http module

http.createServer((request, response) => {

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        "Content-Type" : "text/html",
        "X-Served-By" : "NodeJS!!!!"
        });

    var color = ['red', 'blue', 'white'];
    var rn = Math.floor(Math.random()*3);
    var envs;
    for (i in request) {
        envs += i;
    }

    var html = "<!doctype html>";
        html += "<html>\n<head>\n<title>Hello Node!</title>\n</head>";
        html += "<body bgcolor='" + color[rn] + "'>\n<h1>Hello from a Web app written in NodeJS on ";
        html += "<script type='text/javascript'>document.write(new Date().toLocaleString());</script>\n";
        html += "</h1>\nEnvironmental variables: " ;
        for ( i in request) {
            html += envs[i] + "\n"
        }
        html +=  "</body>\n</html>";

    // 2. Write the announced text to the body of the page
    response.write(html);

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();

}).listen(1337, function(){
    console.log("Listening");
}); // 4. Tells the server what port to be on