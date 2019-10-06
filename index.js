const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

// get users info
app.use('/api/users', (req, res) => {
    res.json([
        {id:1, username: "phat nguyen"},
        {id:2, username: "trang khung"}
    ])
});


// send email
app.get('/send-email', (req, res) => {
    const { sender, senderEmail, text } = req.query;

    // SendGrid Requirements
    const msg = {
        to: 'phat.h.nguyen@hotmail.com',
        from: senderEmail,
        subject: sender,
        text: text,
        html: `<strong>${text}</strong>`,
    }


    // Send Email
    sgMail.send(msg);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));