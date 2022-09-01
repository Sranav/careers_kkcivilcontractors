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
                    <ul className='footer_links-about'>
                        <li>
                            Home
                        </li>
                        <li>About Us</li>
                        <li>Portfolio</li>
                        <li>Office</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="contact-us">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="contact-info">
                        <ul className='footer_links-about'>
                            <li>#99, 4th Floor, " K K Arcade", 60 ft road</li>
                            <li>Chandra Layout, Bangalore - 560 040</li>
                            <li><span className='contactus_span_1'>Landline:</span><a href="tel:(080) 23185426"  className='link_to'> (080) 23185426 </a></li>
                            <li><span className='contactus_span_2'>Email:</span> <a href="mailto: kk.civilcontractors@gmail.com" target="_blank" className='link_to'> kk.civilcontractors@gmail.com</a></li>
                            <li><span className='contactus_span_3'>Web:</span> <a href='https://www.kkcivilcontractor.com/' target="_blank" className='link_to' > www.kkcivilcontractor.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer