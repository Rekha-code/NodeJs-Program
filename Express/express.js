var express = require('express')
var app =  express()



app.get('/',(req,res)=>{
  res.send(`<h1>This is the first route get method</h1>
  <a href="/about" target="_blank">About</a>`)
})

app.get('/about',(req,res)=>{
  res.send(`<input type="text" placeholder="User Name" value="${req.query.name}"/>
  <button>Click</button>`)
})

app.get('/help',(req,res)=>{
  res.send([{
    name:"Rekha",
    email:"rekha@gmail.com"
  },
  {
    name:"sam",
    email:"sam@gmail.com"
  },
  {
    name:"shan",
    email:"shan@gmail.com"
  },
])
})
// app.post('/submit-data',(req,res)=>{
//   res.send('Post Request')
// })

// app.put('/update',(req,res)=>{
//   res.send('pot method')
// })

// app.delete('/delete',(req,res)=>{
//   res.send('Delete Method')
// })
var server = app.listen(4000,()=>{
  console.log('hello world');
})