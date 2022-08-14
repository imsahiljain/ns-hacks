const assignementModel = require("../models/assignement")
const express = require("express");
const router = express.Router();

//POST REQUEST
router.post('/createassignement', async (req, res) => {
    const classID = req.body.classID;
    const assignementName = req.body.assignementName;
    const assignementClassName = req.body.className
    const assignementTeacher = req.body.currentUser;
    const assignementDescription = req.body.assignementDescription;
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    const assignementPostDate = year + "/" + month + "/" + day;
    if (classID == "" || assignementName == "" || assignementTeacher == "" || assignementDescription == "" || assignementTeacher == ""){
        res.send( JSON.stringify({url: `/teacher/class/${classID}/${assignementClassName}/assignments` ,toaststatus:"error", additional: "Crucial info missing!" }));
        return;
    }
    else {
        let newAssignement = new assignementModel({
            assignementclassid: classID,
            assignementname: assignementName,
            assignementclassname: assignementClassName,
            assignementpostdate:assignementPostDate,
            assignementteacher: assignementTeacher,
            assignementdescription: assignementDescription,
            assignementtudentlist: {name:[],email:[],completed:[]}});
        //saving to database
        newAssignement = await newAssignement.save();
        //redirecting back to home page
        res.send( JSON.stringify({url: `/teacher/class/${classID}/${assignementClassName}/assignments` ,toaststatus:"success", additional:"Assignement added!"}));
        return;
        }
});

router.get('/getassignements', async (req, res) => {    
    const assignementClassId = req.query.classId;
    const getAssignementsList = await assignementModel.find({assignementclassid: assignementClassId});
    console.log(getAssignementsList);
    res.send( JSON.stringify({ additional:getAssignementsList}));
    return;
});

module.exports = router;
