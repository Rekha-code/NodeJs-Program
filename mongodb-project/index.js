const {MongoClient} = require('mongodb')
const url = 'mongodb://0.0.0.0:27017/'
const client = new MongoClient(url)

// async function getData(){
//   let result =  await client.connect()
//   let db = result.db('cloth')
//   let collection = db.collection('kids')
//   let res=await collection.find({}).toArray();
//   console.log(res);
// }
// getData()

async function getSingleData(){
  let result =  await client.connect()
  let db = result.db('cloth')
  let collection = db.collection('kids')
  let res=await collection.find({name:'t-shirt'}).toArray();
  console.log(res);
}
getSingleData()
// const express = require('express')
