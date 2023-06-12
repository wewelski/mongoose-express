const Contact = require('./models/contacts.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connection is now OPEN!');
  })
  .catch(error => {
    console.log('Oops! Connection ERROR!');
    console.log(error);
  })

  // const c = new Contact({
  //   name: 'Roowell Fernandez',
  //   phone: 9152034117,
  //   relationship: 'author'
  // });

  // c.save()
  //   .then(c => {
  //     console.log(c)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   });

const myFam = [
  {
    name: 'Grace Per Fernandez',
    phone: 9152034117,
    relationship: 'family'
  },
  {
    name: 'Ravi Reuel Paul Fernandez',
    phone: 9152034117,
    relationship: 'family'
  }
];

Contact.insertMany(myFam);