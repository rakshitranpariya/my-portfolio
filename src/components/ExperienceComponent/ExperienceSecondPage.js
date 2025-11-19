import React from "react";
import "./ExperienceSecondPage.css";

function ExperienceSecondPage({ sendData }) {
  if (!sendData) return null;

  const {
    CompanyName,
    Role,
    Responsibilities = [],
  } = sendData;

  return (
    <div className="container-fluid experience-second-page">
      {/* Optional header context */}
      <h3>{CompanyName} — {Role}</h3>

   
      <div className="responsibility">Responsibilities:</div>
      <ul>
        {Array.isArray(Responsibilities) && Responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceSecondPage;
