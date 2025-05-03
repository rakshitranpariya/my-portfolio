import React from "react";

import styles from "./EducationFirstPage.module.css";

import graduationHat from "../../Images/graduationHat.png";
import locationImage from "../../Images/location.png";
import gpaImage from "../../Images/gpaLogo.png";
function EducationFirstPage({sendData}) {
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
      console.log(Courses);
    return(
        <div className={`container ${styles.educationFirstPage} `}>
        
            <div className={`row ${styles.primaryInformationSection} ${styles.mobilePrimaryInformationSection}`}>
                <div className={`col-md-4 col-12 ${styles.imageContainer}`}>
                        <img src={ImageLink} alt="Institution" className={`${styles.institutionImage} ${styles.mobileInstituteImage}`} />
                </div>
                    <div className={`col-md-8 col-12 ${styles.descriptionContainer}`}>
                    <div className={`text-center text-md-start `}><div className={` ${styles.degreeTitle} ${styles.mobileDegreeTitle}`}>{Degree}</div></div>

                    

                    <div className={`${styles.institutionTitle} ${styles.mobileInstitutionTitle}`}>
                        <div className={styles.instituteName}>{InstitutionName}</div>
                    </div>

                    <div className={`row ${styles.triSection}`}>
                        <div className={`col-lg-6 col-md-12 col-7 d-flex flex-column justify-content-start triSection`}>
                            <div className="sm-2 align-items-start" style={{ flex: 1 }}>
                                <div className={styles.locationDiv}>
                                    <img src={locationImage} alt="Institution" className={styles.locationImage} />
                                    <div className={styles.location}>{Location}</div>
                                </div>
                            </div>
                        
                                <div className={`${styles.durationDiv}`}>
                                    {Duration}
                                </div>
                        
                        </div>

                        {/* second column gpa */}
                        <div className={`col-lg-6 col-md-12 col-5 ${styles.triSectionRight} ${styles.mobiletriSectionRight}`} >
                                <div className={`${styles.gpaSection}`}>GPA : {Gpa}/{TotalGpa}</div>
                        </div>
                    </div>
                    </div>
                </div>


            <div className={`row  d-flex ${styles.bubbleSection}`}>
                <div className={`d-none d-md-block col-sm-12` }>
                {Courses.map((course, idx) => (
                    <span key={idx} className={styles.bubbleChip}>
                        {course}
                    </span>
                ))}
                </div>
            </div>

        </div>
    );
}

export default EducationFirstPage;