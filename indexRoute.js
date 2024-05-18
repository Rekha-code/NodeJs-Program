const express =  require('express')
const app =  express()
var router = require('./ExpressRoutes.js')

app.use('/router',router)

app.get('/:id',(req,res)=>{
  res.send('The id' +req.params.id)
})

app.get('/data/:id/:name',(req,res)=>{
  res.send('id' +req.params.id + 'and name is' +req.params.name)
})

//pattern mached route
app.get('/dataa/:id([0-9]{5})',(req,res)=>{
  res.send('id:' + req.params.id)
})
app.listen(4000)