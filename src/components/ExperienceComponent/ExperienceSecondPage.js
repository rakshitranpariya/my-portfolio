import React from "react";
import "./ExperienceSecondPage.css";
import { data } from "react-router-dom";

function ExperienceSecondPage({sendData}) {
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
            <div className="container-fluid experience-page">
            <strong>Description:</strong>
            <p>
                {Description}
            </p>
            </div>
    );
}

export default ExperienceSecondPage;