import {React,useState} from 'react';
import styles from "./ExperienceComponent.module.css";
import ExperienceFirstPage from './ExperienceFirstPage';
import ExperienceSecondPage from './ExperienceSecondPage';
function ExperienceComponent({sendData}){

const [activeDotIndex, setActiveDotIndex] = useState(0);

    function toggleDot(){
      console.log("togle was clicked");

      if(activeDotIndex === 0){
        setActiveDotIndex(1);
      }
      else{
        setActiveDotIndex(0);
      }
    }
    if (!sendData || sendData.length === 0) {
      console.log("No data received yet.");
      return <p>Loading...</p>; 
    }
    
    const {
      InstitutionName,
      Degree,
      Major,
      Location,
      Duration,
      Gpa,
      TotalGpa,
      Courses,
      ImageLink,
      Description
    } = sendData;
    
      
    return (
    <div className = {`container ${styles.experienceComponent} `} >
      <div className={styles.dotSection}>
        <div className={activeDotIndex===0 ? styles.activeDot : styles.dot} onClick={toggleDot}></div>
        <div className={activeDotIndex===1 ? styles.activeDot : styles.dot} onClick={toggleDot}></div>
      </div>

      <div className={styles.pageGrid} style={{ transform: `translateX(-${activeDotIndex * 100}% )`, transition: "transform 1s ease" }}>
        <div className={styles.individualPage}>
          <ExperienceFirstPage sendData={sendData} />
        </div>
        <div className={styles.individualPage}>
          <ExperienceSecondPage sendData={sendData} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;