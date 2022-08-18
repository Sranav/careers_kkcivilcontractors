
const  employee = require('../Modules/employee');

module.exports ={
  add : async (req,res)=> {
   try{
      const newdata = new employee(req.body);
      let data = await newdata.save();
      console.log(req.body);
      return res.status(200).json({
         sucess:true,
         message: "Data fetched successfully",
         data: data,
      });
   }catch(error) {
      return res.status(500).json({sucess:false, message: error.message});
   }
  }
}



   // module.exports ={

   //   add:async function(req,res){
   //      const newcompany =  await(req.body);
   //      employee.create()
   //      .then(()=>res.json('Added'))
   //      .catch(err=> res.status(400).json('Error:'+err));

   //   }
   //  }