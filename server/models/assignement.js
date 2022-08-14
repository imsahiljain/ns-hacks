const mongoose = require('mongoose');

const assignementSchema = new mongoose.Schema({

    assignementname:{
        type:String,
        required:true
    },
    assignementclassid:{
        type:String,
        required:true
    },
    assignementpostdate:{
        type:String,
        required:true
    },
    assignementclassname:{
        type:String,
        required:true
    },
    assignementteacher:{
        type:String,
        required:true
    },
    assignementdescription:{
        type:String,
        required:true
    },
    assignementtudentlist:{
        name:
       { type:Array,
        required: true
       },
       email:
       { type:Array,
        required: true
       },
       completed:{
        type:Array
       }
    }
});
const assignementModel = mongoose.model("AssignementsCL",assignementSchema,"AssignementsCL");
module.exports = assignementModel