
var express = require('express');
const router = require('express').Router();

const  employee = require('../controller/employeecontroller');


//CREATE
router.post("/add", employee.add);

//UPDATE
// router.post("/update", employee.update);

// //DELETE
// router.delete("/:id", deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getemployee);


module.exports = router; 
