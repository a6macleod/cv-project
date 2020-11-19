import React, { useState } from "react";
import EditEducation from "./EditEducation";

const Education = () => {
  const [education, setEducation] = useState({
    editView: false,
    undergrad: {
      school: "Western Michigan University",
      degree: "Bachelor of Science",
      focus: "Geochemistry",
      yearGraduated: "2010",
    },
    graduate: {
      school: "Western Michigan University",
      degree: "Bachelor of Science",
      focus: "Geochemistry",
      yearGraduated: "2013",
    },
  });

  const saveEdit = () => {
    education({
      ...education,
      editView: false,
    });
  };

  const handleChangeEducation = (fieldName, fieldValue) => {
    setEducation({
      ...education,
      [fieldName]: fieldValue,
    });
  };

  const editInfo = () => {
    setEducation({
      ...education,
      editView: true,
    });
  };

  if (education.editView) {
    return (
      <EditEducation
        education={education}
        handleChangeGeneral={handleChangeEducation}
        saveEdit={saveEdit}
      />
    );
  } else {
    return (
      <div className="mb-5">
        <h2>
          Education Experience
          <div className="btn" onClick={editInfo}>
            <i className="text-muted fas fa-pencil-alt"></i>
          </div>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md- wrapper card p-2 m-2">
            <h3 className="school">{education.undergrad.school}</h3>
            <h4 className="degree">{education.undergrad.degree}</h4>
            <h4 className="Focus">{education.undergrad.focus}</h4>
            <h4 className="yearGraduated">
              {education.undergrad.yearGraduated}
            </h4>
          </div>
          <div className="col-md- wrapper card p-2 m-2">
            <h3 className="school">{education.graduate.school}</h3>
            <h4 className="degree">{education.graduate.degree}</h4>
            <h4 className="Focus">{education.graduate.focus}</h4>
            <h4 className="yearGraduated">
              {education.graduate.yearGraduated}
            </h4>
          </div>
        </div>
        {/* end /.row */}
      </div>
    );
  }
};

export default Education;
