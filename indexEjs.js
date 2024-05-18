const express =  require('express')
const app = express()

app.set('view engine','ejs')

app.get('/profile',(req,res)=>{
  const user = {
    name:'Rekha',
    email:'rekha@gmail.com',
    city:'Mumbai',
    skills:['js','react','node']
  }
  res.render('profile',{user})
})

app.listen(4000)