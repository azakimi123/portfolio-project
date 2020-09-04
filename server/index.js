require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT } = process.env;
const ContactCtrl = require('./controllers/nodemailer');

app.use(express.json());



//endpoints
app.post('/api/contact', ContactCtrl.contactForm);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`)
});