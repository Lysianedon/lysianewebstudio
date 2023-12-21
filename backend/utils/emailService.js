const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const MY_EMAIL_ADDRESS = process.env.MY_EMAIL_ADDRESS;

async function sendNotificationEmail(subject, content) {
    subject = subject || "notification email about Lysianewebstudio backend";
    const msg = {
        to: MY_EMAIL_ADDRESS, 
        from: MY_EMAIL_ADDRESS,
        subject: subject || null,
        text: subject ,
        html:   `<strong>${subject}</strong><br>
        <p>${content}</p>`,
    }
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    sendNotificationEmail,
}