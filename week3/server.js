"use strict";
const http = require('http');
const fs = require('fs');
const mime = require('mime-types');
let lookup = mime.lookup;
const port = 3000;
const server = http.createServer(function (req, res) {
    let path = req.url;
    if (path == "/" || path == "/home") {
        path = "/index.html";
    }
    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404);
            return res.end("ERROR: 404 - File Not Found");
        }
        res.setHeader("X-Content-Type-Option", "nosniff");
        res.writeHead(200, { 'Content-Type': mime_type });
        res.end(data);
    });
});
server.listen(port, function () {
    console.log(`Server Runing at port : ${port}`);
});
//# sourceMappingURL=server.js.map