// var http = require('http')
// var data = require('./data')
var fs = require('fs')

// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application\json'})
//   res.write(JSON.stringify({name:'Rekha',email:'rekha@gmail.com'}))
//   res.end()
// }).listen(4000)


// 
const input = process.argv;
// fs.writeFileSync(input[2],input[3])

if(input[2]=='add'){
  fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
  fs.unlinkSync(input[3])
}
else{
  console.log("invalid output")
}