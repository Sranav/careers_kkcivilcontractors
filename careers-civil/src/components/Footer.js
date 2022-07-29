import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer_logo">
                    <img src={require("../images/kk-logo-2.png")} alt="" />
                    </div>
                    <div className="logo-sub">
                        <h3><em>"Masters of consistency and quality"</em></h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer_links">
                        <h4>Usefull Links</h4>
                    </div>
                    <ul>
                        <li>
                            About Us
                        </li>
                        <li>All Projects</li>
                        <li>Completed Projects</li>
                        <li>Ongoing Projects</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="contact-us">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="contact-info">
                        <ul>
                            <li>#99, 4th Floor, " K K Arcade", 60 ft road</li>
                            <li>Chandra Layout, Bangalore - 560 040</li>
                            <li>Landline:(080) 23185426</li>
                            <li>Email:kk.civilcontractors@gmail.com</li>
                            <li>Web:www.kkcivilcontractor.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer