const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/app.txt`

// fs.writeFileSync(filepath,'This is simple text file')


// fs.readFile(filepath,'utf-8',(error,item)=>{
//   console.log(item);
// })


//update file
// fs.appendFile(filepath,'and file name is app.txt',(error)=>{
//   if(!error)console.log("file is updated");
// })


// fs.rename(filepath,`${dirpath}/convert.txt`,(err)=>{
//   if(!err)console.log("file name changed")
// })


// delete file
// fs.unlinkSync(`${dirpath}/convert.txt`)