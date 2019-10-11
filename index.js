const express = require('express');
const cors = require('cors');
const fs = require("fs");
const enforce = require('express-sslify');
const app = express();
path = require('path');

// Use enforce.HTTPS({ trustProtoHeader: true }) since you're behind Heroku's reverse proxy
app.use(enforce.HTTPS({ trustProtoHeader: true }));

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
        from: process.env.SENDGRID_FROM,
        to: process.env.SENDGRID_TO,
        subject: sender,
        html: `<p>Contact Info: ${senderEmail}</p><p>Details: ${text}</p>`
    }

    // Send Email
    sgMail.send(msg);

    // Return response
    res.json(
        {message: "email sent."}
    )
});

// send email - freelance project
app.get('/send-emailfreelance', (req, res) => {
    const { sender, senderEmail, budget, type, text } = req.query;

    // SendGrid Requirements
    const msgFreelance = {
        from: process.env.SENDGRID_FROM,
        to: process.env.SENDGRID_TO,
        subject: budget + '   ' + type,
        html: `<p>Contact Info: ${sender}</p><p>${senderEmail}</p><p>Details: ${text}</p>`
    }

    // Send Email
    sgMail.send(msgFreelance);

    // Return response
    res.json(
        {message: "email sent."}
    )
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));