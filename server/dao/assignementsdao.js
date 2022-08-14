const assignementModel = require("../models/assignement")
const express = require("express");
const router = express.Router();

//POST REQUEST
router.post('/createassignement', async (req, res) => {
    const classId = req.body.classId;
    const className = req.body.className;
    const assignementName = req.body.assignementName;
    const assignementTeacher = req.body.currentUser;
    const assignementInfo = req.body.assignementInfo;
    if (classId == "" || assignementName == "" || assignementTeacher == "" || assignementInfo == "" || assignementTeacher == ""){
        res.send( JSON.stringify({ url: "", toaststatus:"error", additional: "Crucial info missing!" }));
        return;
    }
    else {
        let newAssignement = new assignementModel({
            assignementclassid: classId,
            assignementname: assignementName,
            assignementteacher: assignementTeacher,
            assignementinfo: assignementInfo,
            assignementtudentlist: {name:[],email:[],completed:[]}});
        //saving to database
        newAssignement = await newAssignement.save();
        //redirecting back to home page
        res.send( JSON.stringify({  url:`/teacher/class/${classId}/${className}/students`,toaststatus:"success", additional:"Assignement added!"}));
        return;
        }
});

router.get('/getassignements', async (req, res) => {    
    const assignementStudent = req.query.studentName;
    if (assignementStudent == ""){
        res.send( JSON.stringify({ url: "", toaststatus:"error", additional: "Crucial info missing!" }));
        return;
    }
    else {
        const getAssignementsList = await assignementModel.find({assignementstudentlist:{name :assignementStudent}});
        
        console.log(getAssignementsList);
        if (!getAssignementsList){
            res.send( JSON.stringify({  url:`/student/classes`, additional:"No Assignements!"}));
        }
        else {
            res.send( JSON.stringify({  url:`/student/classes`, additional:getAssignementsList}));
        }
        return;
        }
});

module.exports = router;
