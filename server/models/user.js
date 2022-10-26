let mongoose = require('mongoose');
const passport = require('passport');
let passprtLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:{
            type: String,
            default:"",
            trim: true,
            required:"username is necessary"
        },
        email:{
            type: String,
            default:"",
            trim: true,
            required:"email is necessary"
        },
        displayName:{
            type: String,
            default:"",
            trim: true,
            required:"display name is necessary"
        },
        created:{
            type: Date,
            default:Date.now
            
        },
        update:{
            type: Date,
            default:Date.now
            
        }
    },
    {
        collection: "users"
    }
);

// configure

let options = ({missingPasswordError:'wrong/missing password'});

User.plugin(passprtLocalMongoose,options);

module.exports.User = mongoose.model('User',User);