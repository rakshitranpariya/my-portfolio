import React from "react";
import "./ExperienceFirstPage.css";
import locationImage from "../../Images/location.png";

function ExperienceFirstPage({ sendData }) {
  // Guard against undefined
  if (!sendData) return null;

  const {
    CompanyName,
    Role,
    EmploymentType,
    Location,
    Duration,
    TechStack = [],
    ImageLink,
  } = sendData;

  return (
    <div className="experienceFirstPage">
      <div className="primaryInformationSection mobilePrimaryInformationSection">
        <div className="imageContainer">
          {ImageLink ? (
            <img
              src={ImageLink}
              alt={`${CompanyName} logo`}
              className="institutionImage mobileInstituteImage"
            />
          ) : null}
        </div>
        <div className="descriptionContainer">
          <div className="jobTitleDiv">
            <div className="roleTitle mobileRoleTitle">{Role}</div>
            <div className="companyTitle mobileCompanyTitle">{CompanyName}</div>
          </div>

          <div className="triSection">
            <div className="locationDiv">
              <img className="locationIcon" src={locationImage} />
              <div className="location">{Location}</div>
            </div>
            <div className="employmentTypeDiv">
              <span className="employmentTypeDot" aria-hidden="true" />
              <span className="employmentTypeText">{EmploymentType}</span>
            </div>
          </div>
          <div className="durationDiv">{Duration}</div>
        </div>
      </div>
      <div className="techStackSection">
        <div className="bubbleSection" aria-label="Technology stack">
          {TechStack.length > 0 ? (
            TechStack.map((tech, idx) => (
              <span key={idx} className="bubbleChip">
                {tech}
              </span>
            ))
          ) : (
            <span className="bubbleChip" aria-disabled="true">
              No tech listed
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceFirstPage;
