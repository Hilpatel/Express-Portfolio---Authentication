// Name: Hil Patel
// id: 301215094
// fileName: error.ejs
// Date: October 08, 2022


// ------------------------------
let express = require("express");
let router = express.Router();
let app = express();

let controllers = require('../controllers/index');

/* GET home page. */
router.get("/",controllers.HomePage );

/* GET about page. */
router.get("/about",controllers.AboutPage );

/* GET projects page. */
router.get("/projects",controllers.ProjectsPage );

/* GET services page. */
router.get("/services",controllers.ServiesPage );

/* GET contact page. */
router.get("/contact",controllers.ContactsPage);

// get route for displaying Login page.
router.get('/login', controllers.DisplayLoginPage )

// post route for Processing Login page
router.post('/login', controllers.ProcessLoginPage)


// get route for displaying Login page.
router.get('/login', controllers.DisplayLoginPage )

// post route for Processing Login page
router.post('/login', controllers.ProcessLoginPage)


// GET to preform logout
router.post('/logout', controllers.ProcessLoginPage)


module.exports = router;
