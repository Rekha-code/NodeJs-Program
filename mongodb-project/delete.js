const dbConnection = require('./mongodb')

const deleteData = async ()=>{
  let data = await dbConnection()
  // let result = await data.deleteOne({name:'max'})
  let result = await data.deleteMany({name:'shorts'})
  console.log(result);
}
deleteData()