const Appointment=require("../model/appointment.js");

const addAppoint=async(req,res)=>{
    try{
    const {name,email,patientName,appointmentDate,patientPhone,slot}=req.body;

    const existingAppointment=await Appointment.findOne({email});

    if(existingAppointment){
        res.status(400).json({
            errorMessage:"appointment already created"
        })
    }
    else{
        const newAppointment=new Appointment({
            name,email,patientName,patientPhone,appointmentDate,slot
        });
    
        const savedAppointment=await newAppointment.save();
    
        res.json(savedAppointment);
    
    }

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
}



const slot1Check=async(req,res)=>{
    const date=req.params.date;

    try{
        const SlotCount=await Appointment.countDocuments({slot:"slot1",appointmentDate:date})

        res.json(SlotCount);

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }

}

const slot2Check=async(req,res)=>{
    const date=req.params.date;

    try{
        const SlotCount=await Appointment.countDocuments({slot:"slot2",appointmentDate:date})

        res.json(SlotCount);

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }

}


const slot3Check=async(req,res)=>{
    const date=req.params.date;

    try{
        const SlotCount=await Appointment.countDocuments({slot:"slot3",appointmentDate:date})

        res.json(SlotCount);

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }

}


const getIndividual=async(req,res)=>{
    const email=req.params.email;
    try{
        const individualReciept=await Appointment.find({email:email})
        res.json(individualReciept);

    }catch(err){
        console.log(err);
        res.status(500).send();
    }
}




const checkAppointment=async(req,res)=>{
    try{

        const email=req.params.email;
    const existingAppointment=await Appointment.findOne({email:email});

    if(existingAppointment){
      return  res.json(true)
    }
    else{
    
       return res.json(false);
    
    }

    }
    catch(err){
        console.log(err);
       return res.json(false);
    }
}


const getAllAppointment=async(req,res)=>{
    try{
    const allAppoints=await Appointment.find();
    res.json(allAppoints);

    }
    catch(err){
        res.status(400).send();
    }
}

const getUpdateSetup=async(req,res)=>{
    const id=req.params.id;
    try{
        const appointmentDetail=await Appointment.findOne({_id:id});
        res.json(appointmentDetail);
    }catch(err){
        res.status(404).send();
    }
    
}


const updateAppointment=async(req,res)=>{

    const id=req.params.id;

   
    try{


        const updatedAppoint={
            _id:id,
            name:req.body.name,
            email:req.body.email,
            patientName:req.body.patientName,
            patientPhone:req.body.patientPhone,
            appointmentDate:req.body.appointmentDate,
            slot:req.body.slot

        }

        

        const updatedDone=await Appointment.findOneAndUpdate({_id:req.params.id},updatedAppoint);



        res.json(updatedDone);

    }
    catch(err){
        res.status(409).json({
            message:error.message
        })
    }

}


const deleteAppointment=async(req,res)=>{


    try{

        await Appointment.deleteOne({_id:req.params.id});

        res.status(201).json("appointment deleted successfully");


    }catch(err){
        res.status(409).json({message:err.message})
    }
}




module.exports={addAppoint,slot1Check,slot2Check,slot3Check,getIndividual,checkAppointment,getAllAppointment,getUpdateSetup,updateAppointment,deleteAppointment};