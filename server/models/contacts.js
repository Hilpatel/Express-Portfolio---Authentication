// Name: Hil Patel
// id: 301215094
// fileName: contacts.js
// Date: October 26, 2022 

let mongoose = require('mongoose');

let contact_list = new mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    email:String
  },
  {
      collection:'contact_list'
  }
  );

  module.exports = mongoose.model('Contact',contact_list);