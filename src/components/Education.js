import React,{useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import EducationComponent from './EducationComponent/EducationComponent';
import "./Education.css";
import './GeneralSection.css'
import leftArrow from '../Images/left-button.png';
import rightArrow from '../Images/right-button.png';

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const [startX, setStartX] = useState(0); // Track the starting position of the touch

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Save the starting X coordinate
  };

  // Handle swipe end
  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX; // Get the ending X coordinate
    const difference = startX - endX;
    console.log("calculating the difference")
    // Threshold to detect a swipe (adjust as needed)
    if (difference > 50) {
      // Swipe left
      if(currentIndex!==educationData.length - 1){
        handleNext();
      }
    } else if (difference < -50) {
      // Swipe right
      if(currentIndex!==0){
        handlePrev();
      }
      setStartX(null);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : educationData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < educationData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const fetchData = async ()=>{
    try{
      const response = await axios.get('https://fxgsvzimq6.execute-api.us-east-1.amazonaws.com/default/FetchEducationDetails');
      setEducationData(response.data);
  }
  catch(error){
    console.error('Error fecthing data:',error.message);
  }
};
useEffect(()=>{fetchData();},[]);
  return (

    <section id="Education" className="general container ">
      <div class="education">

        <div className="carousel-container" id="carousel-container" >
          <div className="carousel-grid" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${currentIndex===0? (currentIndex * 100 ) : (currentIndex * 100 ) +1}% )`,
            transition: "transform 1s ease",
          }}
          >
            {
              educationData.length === 0 ? <p>Loading...</p> :
              educationData.map((data, index) => (
                <div className="individual-card" key={index}>
                <EducationComponent  sendData={data} />
                </div>
              ))
            }    
          </div>
        </div>
      
  
        <div className='button-container'>
          <button onClick={handlePrev} className={`right ${currentIndex === 0 ? "disabled" : ""}` }disabled={currentIndex === 0}>
            <img src={leftArrow} alt="Previous" className="nav-image" />
          </button>
  
          <button onClick={handleNext} className={`left ${currentIndex === educationData.length - 1 ? "disabled" : ""}` }disabled={currentIndex === educationData.length - 1 } >
            <img src={rightArrow} alt="Next" className="nav-image" />
          </button>
        </div>

      </div>

      
    </section>
     
  );
}

export default Education;

