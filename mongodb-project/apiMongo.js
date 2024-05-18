const express = require('express')
const dbConnection = require('./mongodb')
const mongodb = require('mongodb')


const app = express()
app.use(express.json())

app.get('/',async(req,res)=>{
  let data = await dbConnection();
  data = await data.find().toArray()
  console.log(data);
  res.send(data)
})

//insetdata
app.post('/',async(req,res)=>{
  let data = await dbConnection()
  let result =  await data.insertOne(req.body)
  console.log(result);
  res.send(result)
})

//update
app.put('/:name',async(req,res)=>{
  let data = await dbConnection()
  let result = await data.updateOne({name:req.params.name},{$set:req.body})
  console.log(result);
  res.send(result)
})

//delete
app.delete('/:id',async(req,res)=>{
  let data = await dbConnection()
  let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  console.log(result);
  res.send(result)
  })


app.listen(4000)