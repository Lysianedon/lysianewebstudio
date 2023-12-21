const express = require('express');
const app = express();
const CronJob = require('cron').CronJob;
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const backendUrl = process.env.BACKEND_HEALTH_URL;

const cronJob = new CronJob('*/1 * * * *', async function() {
    console.log('Pinging server to keep it awake...');
    try {
        const response = await axios.get(backendUrl);
        if (response.status === 200) {
            console.log('Server pinged successfully');
        } else {
            console.error(`Failed to ping server with status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during server ping:', error.message);
    }
});

module.exports = cronJob;
