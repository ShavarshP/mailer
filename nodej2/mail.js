var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'uv.technews@gmail.com',
    pass: 'shavarsh350700'
  }
});

var mailOptions = {
  from: 'uv.technews@gmail.com',
  to: 'sebastianwilliams250@yahoo.com',
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
