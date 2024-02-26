const http = require("http");
const fs = require("fs");
const url = require("url");


const my_server = http.createServer((req , res) =>{
    if (req.url === "favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recived\n`;
    const myUrl = url.parse(req.url,true);
    // console.log(myUrl);
    // // console.log(req.headers);
    // // console.log(req)
    // // console.log("New Request Recive");
    // fs.appendFile("log.txt",log, (err , data) =>{
    //     switch(req.url){
    //         case "/": res.end("Homepage");
    //         break;
    //         case "/about": res.end("I am Aadarsh Soni");
    //         break;
    //         default:
    //             res.end("404 Ho gaya");

    console.log(myUrl.pathname);
    fs.appendFile("log.txt",log, (err , data) =>{
        switch(req.url){
            case "/":
                if(req.method === "GET"){
                    res.end("Homepage");
                }else{
                    res.end("Get request not allowed");
                }
            break;
            case "/search":
            const search =  myurl.quary.search;
            res.end("Here are your result for"+search);
            case "/about":
            const username =  myurl.quary.myname
            res.end(`Hi,${username}`)
            // const qp = res.end("I am Iron_Man");
            // res.end("I am Aadarsh Soni");
            break;
            case "/signup":
                if(req.method === "GET"){
                    res.end("This is a Signup Form ");
                }else if(req.method === "POST"){
                    //DB Query
                    res.end("success");
                }
                else{
                    res.end("Get request not allowed");
                }
            default:
                res.end("404 Ho gaya");

        }// Aplied multi route , basic server , saving log file , appliying port , appliying headers used fs.appendFile, request handler applied , made thread pool,applied Search.
        // res.end("Hello from server");
    });
    

});

my_server.listen(8000,() => console.log("Server Started"));

