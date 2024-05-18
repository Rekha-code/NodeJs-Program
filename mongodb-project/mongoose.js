const mongoose = require('mongoose')

const main = async()=>{
  await mongoose.connect("mongodb://0.0.0.0:27017/cloth")

  const ProductSchema = new mongoose.Schema({
    name:String,price:Number,brand:String
  })
  const ProductModel = mongoose.model('kids',ProductSchema);
  let data = new ProductModel({name:'hi',price:60,brand:'XYZ'})
  let result =  await data.save()
  console.log(result);



const updateDb = async()=> {
    const product = mongoose.model('kids',ProductSchema)
    let data =  await product.updateOne(
      { name:"h1"},
    {
      $set:{brand:"Arrow"}
    }
)
  console.log(data); 
  }
  updateDb()


  const deletedb = async()=>{
    const Product = mongoose.model('kids',ProductSchema)
    let data = await Product.deleteOne({name:'hi'})
    console.log(data);
  }
  deletedb()
}
main()