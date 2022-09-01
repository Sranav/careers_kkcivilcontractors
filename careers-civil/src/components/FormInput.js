import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormInput.css";
import Alert from 'react-bootstrap/Alert';


const FormInput = () => {
  const form = useRef();
 
  const initialValues = { username: "", phone: "", email: "", year: "" ,resume:""};
  const [formValues, setformValues] = useState(initialValues);
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
   
  };
  const handleSubmit = (e) => {
   ;
    e.preventDefault();
    setformerrors(validates(formValues));
    setisSubmit(true);
    
    //   emailjs.sendForm("service_ucn95br","template_dc2u0pm",form.current,"pZQZ4ANdLnKuyczkN")
    //   .then((result) => {
    //     console.log(result.text)
    // }, (error) => {
    //     console.log(error.text)
    // })
    
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formerrors]);
  const validates = (values) => {
    const errors = {};
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.year) {
      errors.year = "Year is required";
    }
    if (!values.resume) {
      errors.resume = "Resume is required";
    }

    return errors;
  };

  return (
    <>
      {Object.keys(formerrors).length === 0 && isSubmit ? (
        // <div className="submit_message">Success</div>
        <Alert variant="success">
    
    
      <Alert.Heading className="submit_message">Hey, Thank You for applying this Job ,We contact shortly with you</Alert.Heading>
      {/* <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p> */}
      <hr />
      
    </Alert>
      ) : null}
      <form
        action=""
        className="form_fields"
        onSubmit={handleSubmit}
        ref={form}
      >
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <p>{formerrors.username}</p>
        <label htmlFor="">Phone Number:</label>
        <input
          type="number"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        <p>{formerrors.phone}</p>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formerrors.email}</p>
        <label htmlFor="">Years of Experiance</label>
        <input
          type="number"
          name="year"
          value={formValues.year}
          onChange={handleChange}
        />
        <p>{formerrors.year}</p>
        <label htmlFor="">Upload Your CV</label>
        <input type="file"  id=""
        
        name="resume"
        value={formValues.resume}
        onChange={handleChange} />
        <button className="btn btn_submit" value="send">
          submit
        </button>
      </form>
    </>
  );
};

export default FormInput;
