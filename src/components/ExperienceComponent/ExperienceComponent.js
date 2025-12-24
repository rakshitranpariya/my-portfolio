import { React, useState } from "react";
import styles from "./ExperienceComponent.module.css";
import ExperienceFirstPage from "./ExperienceFirstPage";
import ExperienceSecondPage from "./ExperienceSecondPage";
import { MapPin, Calendar, GraduationCap, BookOpen } from "lucide-react";

const ExperienceComponent = ({ sendData, left = false }) => {
  if (!sendData) return null;

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
    Courses, // Assuming this is an array of strings
    ImageLink,
    Description, // Assuming this is an array of bullet points or a string
  } = sendData;
  const formattedDate = `${FromMonth} ${FromYear} - ${ToMonth} ${ToYear}`;

  if (!sendData || sendData.length === 0) {
    console.log("No data received yet.");
    return <p>Loading...</p>;
  }

  return (
    <div className="relative z-10">
      {/* <img src={ImageLink} alt="" className="timeline-img" /> */}
      <div className="relative timeline-img " />
      <div
        className={`timeline-container ${
          left ? "timeline-container-left" : ""
        }`}
      >
        <div
          className={`timeline-pointer ${left ? "timeline-pointer-left" : ""}`}
          aria-hidden="true"
        />
        <div className="bg-white p-6 rounded-md shadow-md">
          <span className="font-bold text-indigo-600 text-sm tracking-wide">
            {formattedDate}
          </span>

          <h1 className="text-2xl font-bold pt-1">{Degree}</h1>

          <p className="pt-1">{Location}</p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceComponent;
