var express = require("express");
var router = express.Router();
var chatController = require("../controller.js/chatGPT");
router.post("/getAnswer", (req, res) => {
    chatController.getAnswer(req).then(data => res.json(data)).catch(err => res.send(err))
});
module.exports = router;