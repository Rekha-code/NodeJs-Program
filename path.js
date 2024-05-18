const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,'files')
console.log(dirpath);


for(i=0;i<=5;i++)
  {
     fs.writeFileSync("hello"+i+".txt","a simple text")
  }