import React from "react";
import "./ProjectSecondPage.css";
import { data } from "react-router-dom";

function ProjectSecondPage({sendData}) {
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
      console.log("Description",Description);
    return(
            <div className="container-fluid project-page">
            <strong>Description:</strong>
            <p>
                {Description}
            </p>
            </div>
    );
}

export default ProjectSecondPage;