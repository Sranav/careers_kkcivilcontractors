import React, { useState } from "react";
import "./CurrentOpening.css";
// import {Button,Modal} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApplyJob from "./ApplyJob";

function CurrentOpening() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
                    <u>Software Enginer</u>
                    <h6>K K Civil contartcors</h6>
                    <h6>Bangalore ,Karanataka</h6>
                  </h4>
                  <h6>Job Description:</h6>
                  <ul className="job_description-type">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                  </ul>

                  <ApplyJob />
                </div>
              </div>
              <div className="col-md-6">
                <div className="job_description">
                  <h4>
                    <u>Software Engineer</u>
                    <h6>K K Civil contartcors</h6>
                    <h6>Bangalore ,Karanataka</h6>
                  </h4>
                  <h6>Job Description:</h6>
                  <ul className="job_description-type">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo ipsa nostrum voluptas dolores nobis sed ratione
                    </li>
                  </ul>

                  <ApplyJob />
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
