const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();
path = require('path');


// Pdf route that will serve pdf
app.get("/download", (req, res) => {
    var file = fs.createReadStream(path.join(__dirname, '/docs/Phat-Nguyen-Resume.pdf'));
    file.pipe(res);
  });


// Set up app to send email using SendGrid
app.use(cors());

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// send email
app.get('/send-email', (req, res) => {
    const { sender, senderEmail, text } = req.query;

    // SendGrid Requirements
    const msg = {
        from: 'phat.h.nguyen@hotmail.com',
        to: 'phatnguyen1901@gmail.com',
        subject: sender,
        html: `<p>${senderEmail}</p><br><p>${text}</p>`
    }


    // Send Email
    sgMail.send(msg);
});

// send email - freelance project
app.get('/send-emailfreelance', (req, res) => {
    const { sender, senderEmail, budget, type, text } = req.query;

    // SendGrid Requirements
    const msgFreelance = {
        from: 'phat.h.nguyen@hotmail.com',
        to: 'phatnguyen1901@gmail.com',
        subject: budget + '   ' + type,
        html: `<p>${sender}</p><br><p>${senderEmail}</p><br><p>${text}</p>`
    }

    // Send Email
    sgMail.send(msgFreelance);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));