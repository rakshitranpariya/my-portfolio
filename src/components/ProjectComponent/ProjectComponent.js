import {React,useState} from 'react';
import styles from "./ProjectComponent.module.css";
import ProjectFirstPage from './ProjectFirstPage';
import ProjectSecondPage from './ProjectSecondPage';
function ProjectComponent({sendData}){

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
      <div className={`container ${styles.projectComponent}`} >

      <div className="dotSection">
        <div className={activeDotIndex===0?"activeDot":"dot"} onClick={toggleDot}></div>
        <div className={activeDotIndex===1?"activeDot":"dot"}onClick={toggleDot}></div>
      </div>
    
      <div className="pageGrid"  style={{
            transform: `translateX(-${activeDotIndex * 100}% )`,
            transition: "transform 1s ease",
          }}>
        <div className="individualPage">
        <ProjectFirstPage sendData={sendData} />
        </div>
        <div className="individualPage">
        <ProjectSecondPage sendData = {sendData}/>
        </div>
      </div>
    
    </div>
  );
}

export default ProjectComponent;