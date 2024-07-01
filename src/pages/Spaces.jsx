import Cafeext from '../assets/images/cafe-ext.jpg'
import Cafeint1 from '../assets/images/cafe-int1.jpg'
import Cafeint2 from '../assets/images/cafe-int2.jpg'
import '../assets/stylesheets/spaces.css'
import React, { useState } from 'react';
import Searchbox from '../components/Searchbox';



function Index() {
  const images = [Cafeext, Cafeint1, Cafeint2]
  return (
    <div className='container'>
      <div className="headers">
        <div className="search-results">
          <i className="fa-solid fa-chevron-down"></i>
          <h3>Studyspaces </h3>
          <h3> in </h3>
          <h4> Barcelona</h4>
        </div>
        <div className="searchbar">
          <Searchbox/>
          <i className="fa-solid fa-sliders"></i>
        </div>
      </div>
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt="cafe" />
            <div className="card-body">
              <div className="card-info">
                <div className="card-text"><h4>Title</h4></div>
                <div className="card-text">district</div>
                <div className="card-text">details</div>
              </div>
              <div className="card-action">
                <img src={image} alt="" className="avatar-small" />
              </div>
            </div>
              <div className="card-text">
                <div className="icons">
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                </div>
                <div className="button">
                  <button className="primary">Book Now</button>
                </div>
              </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Index
