const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  pic:{type:String,required:true,default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  }
},
{
  timestamps:true,
})

userSchema.pre("save",async function(next){
if(!this.ismodified){
  next()
}
})
const User = mongoose.model("User",userSchema)
module.exports=User