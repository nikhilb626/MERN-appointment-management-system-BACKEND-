const express=require('express');

const {addAppoint,slot1Check,slot2Check,slot3Check,getIndividual,checkAppointment,getAllAppointment,getUpdateSetup,updateAppointment,deleteAppointment}=require("../controller/appointController");

const auth=require("../middleware/auth");
const isAdmin=require("../middleware/admin");

const router=express.Router();


router.post("/addAppoint",auth,addAppoint);

router.get("/slot1/:date",auth,slot1Check);
router.get("/slot2/:date",auth,slot2Check);
router.get("/slot3/:date",auth,slot3Check);
router.get("/showIndividual/:email",auth,getIndividual);
router.get("/checkapp/:email",auth,checkAppointment);

router.get("/showAll",auth,isAdmin,getAllAppointment);

router.get("/updatesetup/:id",auth,isAdmin,getUpdateSetup);

router.put("/finalupdate/:id",auth,isAdmin,updateAppointment);


router.delete("/:id",auth,deleteAppointment);

router.delete("/:id",auth,isAdmin,deleteAppointment);



module.exports=router;