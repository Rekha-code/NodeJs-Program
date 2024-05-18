const express = require("express")
const path =  require('path')


const app = express()
const publicPath =  path.join(__dirname,'public')
console.log(publicPath);

//app.use(express.static(publicPath))
app.get('',(req,resp)=>{
  resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(req,resp)=>{
  resp.sendFile(`${publicPath}/about.html`)
})

app.get('*',(req,res)=>{
  res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(4000)