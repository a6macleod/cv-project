import React, { useState } from "react";
import EditExperience from "./EditExperience";

const Experience = () => {
  const [experience, setExperience] = useState({
    editView: false,
    jobTitle: "Senior Technical Reviewer",
    company: "NSF International",
    duties:
      "QC Technical Reviewer work. Coordinate required testing between the account managers, clients, and the laboratory.",
    startYear: 2014,
    endYear: 2015,
  });

  const editExperience = () => {
    setExperience({
      ...experience,
      editView: true,
    });
  };

  const saveEdit = () => {
    setExperience({
      ...experience,
      editView: false,
    });
  };

  const handleChangeExperience = (fieldName, fieldValue) => {
    setExperience({
      ...experience,
      [fieldName]: fieldValue,
    });
  };

  if (experience.editView) {
    return (
      <EditExperience
        experience={experience}
        handleChangeExperience={handleChangeExperience}
        saveEdit={saveEdit}
      />
    );
  } else {
    return (
      <div className="mb-2">
        <h2>
          Work Experience
          <div className="btn" onClick={editExperience}>
            <i className="text-muted fas fa-pencil-alt"></i>
          </div>
        </h2>
        <div className="row justify-content-center">
          <div className="col-sm- wrapper card p-2 m-2 text-align-center">
            <h3 className="jobTitle">{experience.jobTitle}</h3>
            <h4 className="company">{experience.company}</h4>
            <div className="wrapper w-75 m-auto">
              <h4 className="duties">Duties</h4>
              <p className="">{experience.duties}</p>
            </div>
            <h4 className="startYear">Start: {experience.startYear}</h4>
            <h4 className="endYear">End: {experience.endYear}</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default Experience;
