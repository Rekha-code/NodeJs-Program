const express = require('express')
const bodyParser =require('body-parser')
const multer = require('multer')
const upload =  multer()
const app =  express()

app.set('view engine','pug')
app.set('views','./views')

app.get('/',(req,res)=>{
  res.render('form')
})

//for passing application /json
app.use(bodyParser.json())

//for passing application /xwww
app.use(bodyParser.urlencoded({extended:true}))


//for parsing multipart/form -data multer
app.use(upload.array())
app.use(express.static('public'))
app.post('/',(req,res)=>{
console.log(req.body);
res.send("received your request")
})
app.listen(4000)