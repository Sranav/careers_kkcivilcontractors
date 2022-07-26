import React, { useState } from "react";
import "./CurrentOpening.css";
// import {Button,Modal} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function CurrentOpening() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="curent-opening">
        <div className="container">
          <div className="section-heading text-center mt-4">
            <h2>Current Openings</h2>
          </div>
          <div className="current_jobs">
            <div className="row">
              <div className="col-md-6">
                <div className="job_description">
                  <h4>
                    Job Name :<span>Software Engineer</span>
                  </h4>
                  <h4>Job Description:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, tenetur vero recusandae quos error aspernatur
                    eius! Et iusto possimus rerum illo quisquam laboriosam,
                    libero blanditiis ipsa. Excepturi mollitia voluptate
                    nesciunt.
                  </p>
                  <h4>Job Loaction:</h4>
                  <p>Bangalore,Kranataka</p>

                  <Button variant="primary" onClick={handleShow}>
                    Apply Now
                  </Button>

                  <Modal show={show} onHide={handleClose} className="modal_class">
                    <Modal.Header closeButton >
                      <Modal.Title>Please Fill up the form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal_body">
                      <form action="" className="form_fields">
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

                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CurrentOpening;
