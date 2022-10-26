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