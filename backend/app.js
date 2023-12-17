const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const path = require('path');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post("/send-email", (req, res) => {
    const {name, company, email, subject, phoneNumber, message} = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: true, message: "Missing required fields." });
    }
    const msg = {
        to: 'lysiane.don.dev@gmail.com', 
        from: 'lysiane.don.dev@gmail.com',
        reply_to: email,
        subject: subject || null,
        text: `Nouveau mail de contact via Portfolio: ${name}`,
        html:   `<strong>[Nouveau message de ${name}]</strong><br><strong>Nom:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Numéro de téléphone:</strong> ${phoneNumber || 'N/A'}<br><strong>Entreprise:</strong> ${company || 'N/A'}<br><br><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}`,
    }

    sgMail
    .send(msg)
    .catch((error) => {
        console.error(error)
    })
    res.status(200).json({error: false, content: "Email sent"});
})

module.exports = app;