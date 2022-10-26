let express = require('express');
let router = express.Router();

// refer to schema
let Contact = require('../models/contacts')

module.exports.ListPage = (req, res, next) => {

    Contact.find((err, contact_list) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(contact_list);

            res.render('contacts/infolist', {title: 'Book List', ContactList : contact_list});
        }
    });

}

module.exports.DisplayAddPage = (req,res,next)=>{
    res.render('contacts/add');
}

module.exports.AddPage = (req,res,next)=>{
    let newContact = {
        "contactName": req.body.contactName,
        "contactNumber":req.body.contactNumber,
        "email":req.body.email
    }

    Contact.create(newContact,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contactlist');
        }
    })
}

module.exports.DisplayEditPage = (req,res,next)=>{
    let id = req.params.id;

    Contact.findById(id,(err,contactToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // Show the edit view
            res.render('contacts/edit',{contact:contactToEdit});
        }
    });
}

module.exports.EditPage =(req,res,next)=>{
    let id = req.params.id;

    let upadteContact = Contact({
        "_id":id,
        "contactName": req.body.contactName,
        "contactNumber":req.body.contactNumber,
        "email":req.body.email
    });

    Contact.updateOne({_id:id},upadteContact,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contactlist');
        }
    })
}

module.exports.DeletePage = (req,res,next)=>{
    let id = req.params.id;

    Contact.remove({_id:id},(err)=>{
        if(err){
        console.log(err)
        }
        else{
            res.redirect('/contactlist');
        }
    });
}