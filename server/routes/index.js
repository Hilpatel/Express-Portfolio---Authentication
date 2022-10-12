// Name: Hil Patel
// id: 301215094
// fileName: error.ejs
// Date: October 08, 2022


var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    indexIntro:
      " I enjoy trying new things and am looking for a position in information technology that will challenge me to broaden my practical knowledge.",
  });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("about", {
    aboutIntro:
      "I am from India. Currently, I am a student. I have a variety of problem-solving skills, including the ability to evaluate issues and discover solutions. My strengths include being flexible, dependable, and having superb management abilities.",
  });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "this is Projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { 
    serviceOne: "I make games both alone and with the Community that inspire fresh ideas and draw players.",
    serviceTwo:"Developing full-stack web applications which processed, analyzed, and rendered data visually with Managed time-sensitive updates, including content changes and database upgrades.",
    serviceThree:"Building Flexible Code with Proper Descriptions for System Testing",
    serviceFour:"Complex query performance. Data Extraction and Database Management"
   });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "this is Contact" });
});

module.exports = router;
