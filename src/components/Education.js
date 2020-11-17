import React, { useState } from "react";

const Education = () => {
  const [schoolOne, setSchoolOne] = useState("Western Michigan University");
  const [degreeOne, setDegreeOne] = useState("Bachelor of Science");
  const [focusOne, setFocusOne] = useState("Geochemistry");
  const [yearGraduatedOne, setYearGraduatedOne] = useState(2010);
  const [schoolTwo, setSchooTwo] = useState("Western Michigan University");
  const [degreeTwo, setDegreeTwo] = useState("Master of Science");
  const [focusTwo, setFocusTwo] = useState("Geochemistry");
  const [yearGraduatedTwo, setYearGraduatedTwo] = useState(2013);

  return (
    <div className="mb-5">
      <h2>Education Experience</h2>
      <div className="row justify-content-center">
        <div className="col-md- wrapper card p-2 m-2">
          <h3 className="school">{schoolOne}</h3>
          <h4 className="degree">{degreeOne}</h4>
          <h4 className="Focus">{focusOne}</h4>
          <h4 className="yearGraduated">{yearGraduatedOne}</h4>
        </div>
        <div className="col-md- wrapper card p-2 m-2">
          <h3 className="school">{schoolTwo}</h3>
          <h4 className="degree">{degreeTwo}</h4>
          <h4 className="Focus">{focusTwo}</h4>
          <h4 className="yearGraduated">{yearGraduatedTwo}</h4>
        </div>
      </div>
      {/* end /.row */}
    </div>
  );
};

export default Education;
