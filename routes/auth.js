const express = require('express');
const router =express.Router();

const {greetings,overview}=require('../controllers/auth');


router.get("/",greetings);
router.get("/overview",overview);



module.exports=router;