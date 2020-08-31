require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT } = process.env;

app.use(express.json());



//endpoints


app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`)
});