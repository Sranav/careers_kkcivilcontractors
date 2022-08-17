
const  employee = require('../Modules/employee');



   module.exports ={

     add:async function(req,res){
        const newcompany =  await(req.body);
        employee.create()
        .then(()=>res.json('Added'))
        .catch(err=> res.status(400).json('Error:'+err));

     }
    }