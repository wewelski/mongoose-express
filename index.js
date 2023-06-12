const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Contact = require('./models/contacts');

// Had to switch between <locahost> and <127.0.0.1>, whichever works
mongoose.connect('mongodb://127.0.0.1:27017/myApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connection is now OPEN!');
  })
  .catch(error => {
    console.log('Oops! Connection ERROR!');
    console.log(error);
  });

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/contacts', async (req,res) => {
  const dispContacts = await Contact.find({});
  res.render('index', { dispContacts });
})

app.listen(3000, () => {
  console.log('Listening to port 3000..');
})