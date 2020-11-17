import React, { useState } from "react";
import uniqid from "uniqid";

const Experience = () => {
  const [jobTitle, setJobTitle] = useState("Senior Technical Reviewer");
  const [company, setCompany] = useState("NSF International");
  const [duties, setDuties] = useState(
    "QC Technical Reviewer work. Coordiante required testing between the account managers, clients, and the laboratory."
  );
  const [startYear, setStartYear] = useState(2014);
  const [endYear, setEndYear] = useState(2020);

  return (
    <div className="mb-2">
      <h2>Work Experience</h2>
      <div className="row justify-content-center">
        <div className="col-sm- wrapper card p-2 m-2 text-align-center">
          <h3 className="jobTitle">{jobTitle}</h3>
          <h4 className="company">{company}</h4>
          <div className="wrapper w-75 m-auto">
            <h4 className="duties">Duties</h4>
            <p className="">{duties}</p>
          </div>
          <h4 className="startYear">Start: {startYear}</h4>
          <h4 className="endYear">End: {endYear}</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
