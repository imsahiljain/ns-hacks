const classcreation = require("../models/class");
const express = require("express");
const router = express.Router();

//GET REQUEST
router.get('/teacher/getclasstudents', async (req, res) => {
    const classId = req.query.classId;
    const usersList = await classcreation.findOne({classid:classId});
    res.send( JSON.stringify(usersList.studentlist));
    console.log(classId);
    console.log(usersList.studentlist);
    return;
});

router.get('/student/getclasstudents', async (req, res) => {
    const classId = req.query.classId;
    const usersList = await classcreation.findOne({classid:classId});
    res.send( JSON.stringify({students: usersList.studentlist, teacher: usersList.teacher}));
    console.log(classId);
    console.log(usersList.studentlist);
    return;
});
module.exports = router;
