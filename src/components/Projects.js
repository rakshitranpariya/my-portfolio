import React,{useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import ProjectComponent from './ProjectComponent/ProjectComponent';
import styles from './sectionCard.module.css';
import leftArrow from '../Images/left-button.png';
import rightArrow from '../Images/right-button.png';

function Projects() {
  const [projectData, setProjectData] = useState([]);
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
      if(currentIndex!==projectData.length - 1){
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
      prevIndex > 0 ? prevIndex - 1 : projectData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const fetchData = async ()=>{
    try{
      const response = await axios.get('https://fxgsvzimq6.execute-api.us-east-1.amazonaws.com/default/FetchEducationDetails');
      setProjectData(response.data);
  }
  catch(error){
    console.error('Error fecthing data:',error.message);
  }
};
useEffect(()=>{fetchData();},[]);
  return (

    <section id="Project" className={`${styles.general} container `}>
      <div className={styles.particularPage}>

        <div className={styles.carouselContainer} >
          <div className={styles.carouselGrid}
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${currentIndex===0? (currentIndex * 100 ) : (currentIndex * 100 ) +1}% )`,
            transition: "transform 1s ease",
          }}
          >
            {
              projectData.length === 0 ? <p>Loading...</p> :
              projectData.map((data, index) => (
                <div className={styles.individualCard} key={index}>
                <ProjectComponent  sendData={data} />
                </div>
              ))
            }    
          </div>
        </div>
      
  
        <div className={styles.buttonContainer}>
          <button onClick={handlePrev} className={`${currentIndex === 0 ? styles.disabled : ''}` }disabled={currentIndex === 0}>
            <img src={leftArrow} alt="Previous" className={styles.navImage} />
          </button>
  
          <button onClick={handleNext} className={`${currentIndex === projectData.length - 1 ? styles.disabled : ''}` }disabled={currentIndex === projectData.length - 1 } >
            <img src={rightArrow} alt="Next" className={styles.navImage} />
          </button>
        </div>
      </div>
    </section>
     
  );
}

export default Projects;

