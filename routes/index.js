const format = require("date-fns/format");
var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "MM/dd/yyyy"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "MM/dd/yyyy"),
  },
];

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
  // res.json({ users: ["1", "2"] });
  // res.send(messages);
});

/* GET form page. */
router.get("/new", function (req, res) {
  res.render("form", { title: "Message Form", name: "Mini Message Board" });
});

/* POST Form page. */
router.post("/new", function (req, res) {
  messages.push({
    text: req.body.userMessage,
    user: req.body.userName,
    added: format(new Date(), "MM/dd/yyyy"),
  });
  res.redirect("/");
});

module.exports = router;
