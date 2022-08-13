const classcreation = require("../models/class");
const express = require("express");
const router = express.Router();

//GET REQUEST
router.get('/getclasstudents', async (req, res) => {
    const classId = req.body.classId;
    const usersList = await classcreation.findOne({classid:classId});
    res.send( JSON.stringify({ usersList }));
    return;
});
module.exports = router;
