import React from "react";
import { data } from "react-router-dom";
import styles from "./EducationSecondPage.module.css";


function EducationSecondPage({sendData}) {
    const {
        Description
      } = sendData;
      console.log("Description",Description);
    return(
            <div className={`container-fluid ${styles.educationSecondPage}`}>
            <strong>Description:</strong>
            <p>
                {Description}
            </p>
            </div>
    );
}

export default EducationSecondPage;