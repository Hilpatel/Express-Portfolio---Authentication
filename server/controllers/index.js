let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport  = require('passport');


// User Model
let userModel = require('../models/user');
let User = userModel.User;

module.exports.HomePage = (req, res, next) => {
    res.render('index', {
        indexIntro:
        " I enjoy trying new things and am looking for a position in information technology that will challenge me to broaden my practical knowledge.",
      });
}

module.exports.AboutPage = (req, res, next) => {
    res.render("about", {
        aboutIntro:
        "I am from India. Currently, I am a student. I have a variety of problem-solving skills, including the ability to evaluate issues and discover solutions. My strengths include being flexible, dependable, and having superb management abilities.",
      });
}

module.exports.ServiesPage = (req, res, next) => {
    res.render("services", { 
        serviceOne: "I make games both alone and with the Community that inspire fresh ideas and draw players.",
    serviceTwo:"Developing full-stack web applications which processed, analyzed, and rendered data visually with Managed time-sensitive updates, including content changes and database upgrades.",
    serviceThree:"Building Flexible Code with Proper Descriptions for System Testing",
    serviceFour:"Complex query performance. Data Extraction and Database Management"
       });

}

module.exports.ContactsPage = (req, res, next) => {
    res.render('contact');
}

module.exports.ProjectsPage = (req, res, next) => {
    res.render('projects');
}


module.exports.DisplayLoginPage = (req, res, next) => {
    // // check the use status
    if(!req.user){
        res.render('Login',
        {
            displayName: req.user ? req.user.displayName: ''
        });
    }
    else {
        return res.render('Login');
    }

    
}

module.exports.ProcessLoginPage = (req,res,next)=>{
    passport.authenticate('local',
    (err,user,info)=>{
        if(err){
            return next(err);
        }
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            return res.render('Login');
        }
        req.login(user,(err)=>{
            //server err
            if(err){
                return next(err);
            }
            return res.redirect('/contactlist');
        });
    })(req,res,next);
}





module.exports.performLogout = (req,res,next)=>{
    req.logout();
    res.redirect('/');
}