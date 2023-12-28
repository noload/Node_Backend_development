const http = require('http');
/**
 * http module contain a function called createServer()
 * it take a callback function and that calllback function take two argument i.e. request and response
 */

const server = http.createServer((req,res)=>{
    if (req.url == '/home') {
        res.end("Welcome to home page")
    } else if(req.url == '/user') {
        res.end(`{"name":"vaibhav",
    "id":"1029"}`)
    }
})

server.listen(4000,()=>{
    console.log("listening on port");
})