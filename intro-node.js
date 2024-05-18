var http = require('http')
var app = require('./app')
var fs = require('fs');
const { inherits } = require('util');

console.log(app)

var a = 1;
var b = 2;
console.log(a+b);

// using function
function test(){
  console.log("hello")
}
test()


// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'text/plain'});
// res.end('hello world')
// }).listen(4000)


//core modules http/fs/buffer


http.createServer((req,res)=>{
  fs.readFile('demofs.html',function(req,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data)
    return res.end()
  })
}).listen(4000)

 fs.writeFileSync('hello.txt',"hi this is write file sync example")

 console.log("====>"+__dirname)

console.log("====>"+__filename)

//install packages
// npm i
// npm init
// npm i -g nodemon