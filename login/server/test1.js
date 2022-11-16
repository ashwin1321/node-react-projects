
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'gentechtest@outlook.com',
        pass: 'gentech@123'
    }
});

let mailDetails = {
    from: 'gentechtest@outlook.com',
    to: 'ashwinkh7@gmail.com',
    subject: 'Finally mail gayo',
    text: 'YEAHHHHHHHH MAil aayoooooooooo'
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});