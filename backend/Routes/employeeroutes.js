
var express = require('express');
const router = require('express').Router();

const  employee = require('../controller/employeecontroller');


//CREATE
router.post("/add", employee.add);

// UPDATE
router.get("/get", employee.get);

// //DELETE
router.delete("/delete/:id", employee.delete);
router.put("/update/:id", employee.update);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getemployee);


module.exports = router; 
