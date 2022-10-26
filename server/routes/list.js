// Name: Hil Patel
// id: 301215094
// fileName: list.js
// Date: October 26, 2022

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// Guard function for contactlisr
function performAuth(req,res,next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

let listController = require('../controllers/contacts')

/* GET for book list - READ operation. */
router.get('/', listController.ListPage);


// get route for add page.

router.get('/add',performAuth, listController.DisplayAddPage)

// post route for add page
router.post('/add',performAuth, listController.AddPage)

// get router for edit list page
router.get('/edit/:id/editBook', performAuth,listController.DisplayEditPage);

// post route for the edit page to show the updated list

router.post("/edit/:id/editBook",performAuth, listController.EditPage);

// get route to perform deletion of a contact info

router.get("/delete/:id",performAuth,listController.DeletePage);

module.exports = router;