require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT } = process.env;
const ContactCtrl = require('./controllers/nodemailer');
const path = require('path');

app.use(express.json());



//endpoints
app.post('/api/contact', ContactCtrl.contactForm);

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../build/index.html'))
})

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`)
});