import React, { useState } from "react";
import EditEducation from "./EditEducation";

const Education = () => {
  const [education, setEducation] = useState({
    editView: false,
    undergradSchool: "Western Michigan University",
    undergradDegree: "Bachelor of Science",
    undergradFocus: "Geochemistry",
    undergradYearGraduated: "2010",
    graduateSchool: "Western Michigan University",
    graduateDegree: "Bachelor of Science",
    graduateFocus: "Geochemistry",
    graduateYearGraduated: "2013",
  });

  const saveEdit = () => {
    setEducation({
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
        handleChangeEducation={handleChangeEducation}
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
            <h3 className="school">{education.undergradSchool}</h3>
            <h4 className="degree">{education.undergradDegree}</h4>
            <h4 className="Focus">{education.undergradFocus}</h4>
            <h4 className="yearGraduated">
              {education.undergradYearGraduated}
            </h4>
          </div>
          <div className="col-md- wrapper card p-2 m-2">
            <h3 className="school">{education.graduateSchool}</h3>
            <h4 className="degree">{education.graduateDegree}</h4>
            <h4 className="Focus">{education.graduateFocus}</h4>
            <h4 className="yearGraduated">{education.graduateYearGraduated}</h4>
          </div>
        </div>
        {/* end /.row */}
      </div>
    );
  }
};

export default Education;
