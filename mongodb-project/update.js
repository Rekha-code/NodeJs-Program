const dbConnection = require('./mongodb')


const updateData =  async()=>{
  let db = await dbConnection()
  let result =await db.updateOne(
    {name:'max'},{$set:{price:100}}
  )
  console.log(result);
}
updateData()