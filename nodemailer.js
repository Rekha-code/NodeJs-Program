// var nodemailer =  require('nodemailer')

// var transporter = nodemailer.createTransport({
//   service:'gmail',
//   auth:{
// user:'rekhas.gavhane@gmail.com',
// pass:'Rekha@12345'
//   }
// });

// var mailoptions = {
//   from:'rekhas.gavhane@gmail.com',
//   to:'rekha.gorde8@gmail.com',
//   subject:'sending email using node js',
//   text:'That was so easy to send mail'
// };

// transporter.sendMail(mailoptions,(err,info)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Email sent:'+info.response);
//   }
// })


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rekhas.gavhane@gmail.com',
    pass: 'Rekha@12345'
  }
});

var mailOptions = {
  from: 'rekhas.gavhane@gmail.com',
  to: 'rekha.gorde8@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});