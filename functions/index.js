const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'theholisticwellness5@gmail.com', // here use your real email
      pass: 'mansing1983' // put your password correctly (not in this question please)
    }
  });
exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const name = req.query.name;
        const emailid = req.query.emailid;
        const service = req.query.service;
        const time = req.query.time;
        const note = req.query.note;

        const mailOptions = {
            from: 'mansing <theholisticwellness@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: "spol421@gmail.com",
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `${name} ${emailid} ${service} ${time} ${note}` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});