import React from "react";
import "./ExperienceFirstPage.css";
import { data } from "react-router-dom";

function ExperienceFirstPage({sendData}) {
    const {
        InstitutionName,
        Degree,
        Major,
        Location,
        Duration,
        Gpa,
        TotalGpa,
        Courses,
        ImageLink
      } = sendData;
      
    return(
            <div className="container-fluid experience-first-page">
<h2>{InstitutionName}</h2>
    {/* <img src={ImageLink} alt="Dynamic Example" className='institution-logo'></img> */}
    <p><strong>Degree:</strong> {Degree}</p>
    <p><strong>Major:</strong> {Major}</p>
    <p><strong>Location:</strong> {Location}</p>
    <p><strong>Duration:</strong> {Duration}</p>
    <p><strong>GPA:</strong> {Gpa}/{TotalGpa}</p>
    <div>
    <strong>Courses:</strong>
            <ul>
                {Courses.map((course, courseIndex) => (
                        <li key={courseIndex}>{course}</li>
                ))}
            </ul>
    </div>
    </div>
    );
}

export default ExperienceFirstPage;