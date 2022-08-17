const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      }, 
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      
      yearsofexperience: {
        type: String,
        required: true,
      },
      resume: {
        type: String,
      },
    });


const employee = mongoose.model('employee',employeeSchema);
module.exports=employeeSchema;    
