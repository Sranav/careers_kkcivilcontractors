import React from 'react'
import "./BannerSection.css"
const BannerSection = () => {
  return (
    <>
    <section className="banner-section">
        <div className="banner_img">
        <img src={require('../images/banner-2.jpg')} alt="" />
        </div>
        <div className="banner-heading">
            <h1>Career</h1>
        </div>
    </section>
    </>
  )
}

export default BannerSection