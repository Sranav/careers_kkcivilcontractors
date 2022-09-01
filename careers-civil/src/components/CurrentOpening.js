import React, { useEffect, useState } from "react";
import "./CurrentOpening.css";
// import {Button,Modal} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApplyJob from "./ApplyJob";
import Axios from "axios"
import axios from "axios";

function CurrentOpening() {
 const [data, setdata] = useState("")
 const [data2, setdata2] = useState("")

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      setdata(response.data[0].email)
      setdata2(response.data[0].name)
    })
  })
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
                    <u>Software Engineer {data}</u>
                    <h6>K K Civil contartcors {data2}</h6>
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
