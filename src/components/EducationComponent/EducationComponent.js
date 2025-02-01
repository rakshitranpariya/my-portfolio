import {React,useState} from 'react';
import "./EducationComponent.css";
import EducationFirstPage from './EducationFirstPage';
import EducationSecondPage from './EducationSecondPage';
function EducationComponent({sendData}){

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
    <div className="container education-component" >

      <div className="dot-section">
        <div className={activeDotIndex===0?"active-dot":"dot"} onClick={toggleDot}></div>
        <div className={activeDotIndex===1?"active-dot":"dot"}onClick={toggleDot}></div>
      </div>
    
      <div className="page-grid"  style={{
            transform: `translateX(-${activeDotIndex===0? (activeDotIndex * 100 ) : (activeDotIndex * 100 ) }% )`,
            transition: "transform 1s ease",
          }}>
        <div className="individual-page">
        <EducationFirstPage sendData={sendData} />
        </div>
        <div className="individual-page">
        <EducationSecondPage sendData = {sendData}/>
        </div>
      </div>
    
    </div>
  );
}

export default EducationComponent;