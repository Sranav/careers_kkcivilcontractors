import React, { useState , useEffect } from "react";
import "./FoemInput.css"

const FormInput = () => {
    
  const initialValues = { username: "", phone: "", email: "", year: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setformValues({...formValues,[name]:value})
    console.log(formValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setformerrors(validates(formValues))
    setisSubmit(true)
  }
  useEffect(()=>{
    console.log(formerrors)
    if(Object.keys(formerrors).length === 0 && isSubmit){
        console.log(formValues)
    }

  },[formerrors])
  const validates=(values) =>{
    const errors={}
    const regex="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    if(!values.username){
        errors.username="username is required"
    }
    if(!values.phone){
        errors.phone="Phone number is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    
    if(!values.year){
        errors.year="year is required"
    }
    return errors

  }

  return (
    <>
    {Object.keys(formerrors).length === 0 && isSubmit ?(<div className="submit_message">Success</div>):null}
    <form action="" className="form_fields" onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input type="text" name="username" value={formValues.username} onChange={handleChange}/>
      <p>{formerrors.username}</p>
      <label htmlFor="">Phone Number:</label>
      <input type="number" name="phone" value={formValues.phone} onChange={handleChange}/>
      <p>{formerrors.phone}</p>
      <label htmlFor="">Email:</label>
      <input type="email" name="email" value={formValues.email} onChange={handleChange}/>
      <p>{formerrors.email}</p>
      <label htmlFor="">Years of Experiance</label>
      <input type="number" name="year" value={formValues.year} onChange={handleChange}/>
      <p>{formerrors.year}</p>
      <label htmlFor="">Upload Your CV</label>
      <input type="file" name="" id="" />
      <button>submit</button>
    </form>
    </>
  );
};

export default FormInput;
