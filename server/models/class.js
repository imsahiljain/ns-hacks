const mongoose = require("mongoose");

   /*
    * Class Model, information we will be getting and setting classes from DB and vice versa 
    */

  //Schema, all needed information
const classSchema = new mongoose.Schema({
    classname: {
        type:String,
        required:true
    }, 
    classid: {
        type:String,
        required:true
    },
    teacher: {
        type:String,
        required:true
    },
    schedule: {
        type:Date,
        required:true
    },
    studentlist: {
        type:Array,
        required: true
    }
});

//Specifying which cluster from Mongodb database
const classModel = mongoose.model("ClassesCL",classSchema, "ClassesCL");
module.exports = classModel