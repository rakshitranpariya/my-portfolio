import React from "react";
import "./EducationSecondPage.css";
import { data } from "react-router-dom";

function EducationSecondPage({sendData}) {
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
            <div className="container-fluid education-page">
            <strong>Description:</strong>
            <p>
                {Description}
            </p>
            </div>
    );
}

export default EducationSecondPage;