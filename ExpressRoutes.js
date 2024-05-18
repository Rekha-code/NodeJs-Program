const express = require('express')
const app =  express()
const router = express.Router()

router.get('/',(req,res)=>
{
  res.send('get route method')
})

router.post('/postt',(req,res)=>{
  res.send("post route method")
})

module.exports=router;