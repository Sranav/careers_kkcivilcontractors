import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./ApplyJob.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormInput from "./FormInput";

const ApplyJob = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //     const {register ,handleSubmit ,error}=useForm()
  //   const onSubmit=(data)=>{
  //     console.log(data)
  //   }

  return (
    <>
      <Button  onClick={handleShow} className="btn_apply">
        Apply Now
      </Button>
      <Modal show={show} onHide={handleClose} className="modal_class">
        <Modal.Header closeButton>
          <Modal.Title>Please Fill up the form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          {/* <form action="" className="form_fields">
            <label htmlFor="">Name:</label>
            <input type="text" />
            <label htmlFor="">Phone Number:</label>
            <input type="number" />
            <label htmlFor="">Email:</label>
            <input type="email" />
            <label htmlFor="">Years of Experiance</label>
            <input type="text" />
            <label htmlFor="">Upload Your CV</label>
            <input type="file" name="" id="" />
          </form> */}
          <FormInput/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ApplyJob;
