const dbConnection = require('./mongodb')

// const insert = async()=>{
//   const db = await dbConnection()
//   const result = await db.insertOne(
//     {name:'shorts',brand:'cottonKing',price:3000}
//   )
//   if(result.acknowledged){
//     console.log("Data inserted");
//   }
// }
// insert()

const insertMany = async()=>{
  const db = await dbConnection()
  const result = await db.insertMany([
    {name:'shorts',brand:'levis',price:3000},
    {name:'shorts',brand:'cottonKing',price:3000},{name:'shorts',brand:'adidas',price:3000},{name:'shorts',brand:'Jocky',price:3000}
 ])
  if(result.acknowledged){
    console.log("Data inserted");
  }
}
insertMany()