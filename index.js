const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Contact = require('./models/contacts');

// Had to switch between <localhost> and <127.0.0.1>, whichever works
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

app.get('/contacts/:person', async (req,res) => {
  const { id } = req.params;
  const person = await Contact.findById(id);
  res.render('details', { person })
})

app.listen(3000, () => {
  console.log('Listening to port 3000..');
})