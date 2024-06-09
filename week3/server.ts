const http = require('http'); //commonJS Module pattern (CSJ)
const fs = require('fs');
const mime=require('mime-types');
let lookup=mime.lookup;//alias for mime.lookup

const port= 3000;


//when we create a server ubstbace =m it is IMMUTABLE = cannot be changed until the server is restarted
const server = http.createServer(function(req, res)  
{
    let path = req.url; //alias for req.url
    if(path =="/" || path =="/home"){
        path = "/index.html";
    }
    let mime_type=lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

   fs.readFile(__dirname+path, function(err,data){
    if (err)
    {
        res.writeHead(404); //status - file not found
        return res.end("ERROR: 404 - File Not Found"); //output the error message
    }
    
    res.setHeader("X-Content-Type-Option","nosniff"); //status - all ok
    res.writeHead(200,{'Content-Type':mime_type});
    res.end(data);
   });
});

server.listen(port,function()
{     // server.addEventListener ("")
console.log(`Server Runing at port : ${port}`);
});