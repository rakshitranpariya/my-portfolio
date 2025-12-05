import React, { useEffect, useRef, useState } from "react";
import styles from "./EducationFirstPage.module.css";
import locationImage from "../../Images/location.png";
function getRowsCount(containerHeight, chipHeight, minRows = 1) {
  return Math.max(minRows, Math.floor(containerHeight / chipHeight));
}
function EducationFirstPage({ sendData }) {
  const containerRef = useRef();
  const chipRef = useRef();
  const [rowCount, setRowCount] = useState(1);
  useEffect(() => {
    function updateRows() {
      if (containerRef.current && chipRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const chipHeight = 45;
        setRowCount(getRowsCount(containerHeight, chipHeight));
      }
    }
    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  const tracks = Array(rowCount).fill(0);
  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const {
    InstitutionName,
    Degree,
    Major,
    Location,
    FromMonth,
    FromYear,
    ToMonth,
    ToYear,
    Gpa,
    TotalGpa,
    Courses,
    ImageLink,
  } = sendData;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatDate = (month, year) => {
    if (month === "~" || year === "~") {
      return "Present";
    }
    return `${monthNames[Number(month) - 1]} ${year}`;
  };
  const fromDisplay = formatDate(FromMonth, FromYear);
  const toDisplay = formatDate(ToMonth, ToYear);
  const getDurationString = (fromMonth, fromYear, toMonth, toYear) => {
    let endMonth, endYear;
    if (toMonth === "~" || toYear === "~") {
      const now = new Date();
      endMonth = now.getMonth() + 1;
      endYear = now.getFullYear();
    } else {
      endMonth = Number(toMonth);
      endYear = Number(toYear);
    }
    const startMonth = Number(fromMonth);
    const startYear = Number(fromYear);
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    let result = "";
    if (years > 0) {
      result += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      result += result ? `, ` : "";
      result += `${months} month${months > 1 ? "s" : ""}`;
    }
    return result || "Less than 1 month";
  };
  return (
    <div className={`container ${styles.educationFirstPage} `}>
      <div
        className={`row ${styles.primaryInformationSection} `}
      >
        <div className={`col-lg-3 col-md-4 col-12 ${styles.imageContainer}`}>
          <img
            src={ImageLink}
            alt="Institution"
            className={`${styles.institutionImage}`}
          />
        </div>
        <div className={`col-lg-9 col-md-8 col-3 ${styles.descriptionContainer}`}>
          <div className={styles.educationTitleDiv}>
            <div className={` ${styles.degreeTitle}`}>
              {Degree} {Major}
            </div>
            <div className={styles.instituteName}>{InstitutionName}</div>
          </div>

          <div className={`row ${styles.triSection}`}>
            <div
              className={`col-lg-6 col-md-12 col-9 d-flex flex-column justify-content-start ${styles.triSectionLeft}`}
            >
              <div className="sm-2 align-items-start" style={{ flex: 1 }}>
                <div className={styles.locationDiv}>
                  <img
                    src={locationImage}
                    alt="Institution"
                    className={styles.locationIcon}
                  />
                  <div className={styles.location}>{Location}</div>
                </div>
              </div>

              <div className={`${styles.durationDiv}`}>
                {`${fromDisplay} – ${toDisplay}`}
              </div>
            </div>

        
            <div
              className={`col-lg-6 col-md-12 col-5 ${styles.triSectionRight} `}
            >
              <div className={`${styles.gpaSection}`}>
                GPA : {Gpa}/{TotalGpa}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row d-none d-md-flex ${styles.secondaryInformationSection}`} ref={containerRef}>
        <div className={styles.bubbleSection}>
          {tracks.map((_, trackIdx) => (
            <div className={styles.bubbleTrack} key={trackIdx}>
              {[
                ...shuffleArray(Courses),
                ...shuffleArray(Courses),
                ...shuffleArray(Courses),
              ].map((tech, idx) =>
                trackIdx === 0 && idx === 0 ? (
                  <span ref={chipRef} key={idx} className={styles.bubbleChip}>
                    {tech}
                  </span>
                ) : (
                  <span key={idx} className={styles.bubbleChip}>
                    {tech}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationFirstPage;
