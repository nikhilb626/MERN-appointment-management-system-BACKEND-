const mongoose=require("mongoose");



const appointSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    patientName:{type:String,required:true},
    patientPhone:{type:String,required:true},
    appointmentDate:{type:Date,required:true},
    slot:{type:String,required:true}
});



const Appointment=mongoose.model("appointment",appointSchema);


module.exports=Appointment;