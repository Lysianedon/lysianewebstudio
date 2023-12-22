const CronJob = require('cron').CronJob;
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const backendUrl = process.env.BACKEND_HEALTH_URL;
const {sendNotificationEmail} = require("../utils/emailService");


const cronJob = new CronJob('*/14 * * * *', async function() {
    console.log('Pinging server to keep it awake...');
    try {
        const response = await axios.get(backendUrl);
        if (response.status === 200) {
            console.log('Server pinged successfully');
        } else {
            console.error(`Failed to ping server with status code: ${response.status}`);
            const notificationEmail = {
                subject: "[LYSIANEWEBSTUDIO'S SERVER DOWN]",
                content: `
                <h6>ERROR STATUS: ${response.status}</h6>
                <p><strong>Message: </strong>${error.message}</p>
                `
            }
            console.log('Sending failure notification email...');
            await sendNotificationEmail( notificationEmail.subject, notificationEmail.content);
        }
    } catch (error) {
        console.error('Error during server ping:', error.message);
        
        const notificationEmail = {
            subject: `[ERROR ${error.status} IN LYSIANEWEBSTUDIO'S SERVER]`,
            content: `
            <h6>ERROR STATUS: ${error.status}</h6>
            <p><strong>Message: </strong>${error.message}</p>
            `
        }
        console.log('Sending failure notification email...');
        await sendNotificationEmail(notificationEmail.subject, notificationEmail.content);
    }
});

module.exports = cronJob;
