const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/passwords', (req, res) => {
  const what_to_put = "hello, the test is successfu";

// Return them as json
  res.json(what_to_put);

  console.log(`${what_to_put}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
