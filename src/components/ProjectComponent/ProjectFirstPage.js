import React from "react";
import "./ProjectFirstPage.css";
import { data } from "react-router-dom";

function ProjectFirstPage({sendData}) {
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
            <div className="container-fluid project-first-page">
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

export default ProjectFirstPage;