const classcreation = require("../models/class");
const express = require("express");
const router = express.Router();

//POST REQUEST
router.post('/createclass', async (req, res) => {
    const className = req.body.className;
    const classId = req.body.classId;
    const classSchedule = "01/01/2022";
    const currentUser = req.body.currentUser;
    if (className == "" || classId == "" || currentUser == ""){
        res.send( JSON.stringify({ url: "", toaststatus:"error", additional: "Please fill all info!" }));
        return;
    }
    const checkIfExist = await classcreation.exists({classid:classId});
    if (checkIfExist){
        res.send( JSON.stringify({ url: "",toaststatus:"warning", additional: "Class already exists!" }));
        return;
    }
    else {
        let newClass = new classcreation({ classname : className, classid :classId, teacher:currentUser, schedule:classSchedule, studentlist: {name:[],email:[]} });
        //saving to database
        newClass = await newClass.save();
        //redirecting back to home page
        res.send( JSON.stringify({  url:`/teacher/class/${classId}/${className}/students`,toaststatus:"success", additional:"Class Scheduled!"}));
        return;
        }
});

router.patch('/enrollclass', async (req, res) => {
    const classId = req.body.classId;
    const currentUser = req.body.currentUser;
    const currentEmail = req.body.currentEmail;
    if (classId == "" || currentUser == ""){
        res.send( JSON.stringify({ url: "", toaststatus:"error", additional: "Some info are missing!" }));
        return;
    }
    const checkIfExist = await classcreation.findOne({classid:classId});
    if (!checkIfExist){
        res.send( JSON.stringify({ url: "",toaststatus:"warning", additional: "Class ID is incorrect!" }));
        return;
    }
    else if (checkIfExist.studentlist.email.includes(currentEmail)){
        res.send( JSON.stringify({  url:`/student/class/${classId}/${checkIfExist.classname}/assignments`,toaststatus:"success", additional:"Rejoined class!"}));
        return;
    }
    else {
        const updater = await classcreation.findOneAndUpdate(
            {classid:classId},
            { studentlist: {name :[...checkIfExist.studentlist.name,currentUser], email :[...checkIfExist.studentlist.email,currentEmail]}});
        res.send( JSON.stringify({  url:`/student/class/${classId}/${checkIfExist.classname}/assignments`,toaststatus:"success", additional:"Enrolled in class!"}));
        return;
        }
});
module.exports = router;
