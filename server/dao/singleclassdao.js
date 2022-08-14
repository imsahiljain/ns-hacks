const classcreation = require("../models/class");
const express = require("express");
const router = express.Router();

//GET REQUEST
router.get('/teacher/getclasstudents', async (req, res) => {
    const classId = req.query.classId;
    const usersList = await classcreation.findOne({classid:classId});
    if (usersList){
    res.send( JSON.stringify(usersList.studentlist));
    }
    return;
});

router.get('/student/getclasstudents', async (req, res) => {
    const classId = req.query.classId;
    const usersList = await classcreation.findOne({classid:classId});
    res.send( JSON.stringify({studentnames: usersList.studentlist.name, teacher: usersList.teacher}));
    return;
});
module.exports = router;
