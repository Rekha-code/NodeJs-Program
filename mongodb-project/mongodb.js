const {MongoClient} = require('mongodb')
const url = 'mongodb://0.0.0.0:27017/'
const client = new MongoClient(url)


async function dbConnection(){
  let result =  await client.connect()
  let db = result.db('cloth')
 return db.collection('kids')
}
module.exports=dbConnection
// dbConnection().then((res)=>{
//   res.find().toArray().then((data)=>{
//     console.log(data);
//   });
// })