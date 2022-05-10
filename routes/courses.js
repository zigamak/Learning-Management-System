const express = require ("express");
const router = express.Router();
const sligify =require("slufigy");
const db =require ("../config/db");

router.post ("/create", (req,res)=>{
    const {name} =req.body;
    console.log(name);
});
module.export=router;