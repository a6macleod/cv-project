import React from "react";
import uniqid from "uniqid";

const Education = (props) => {
  return (
    <div className="mb-5">
      <h2>Education Experience</h2>
      <div className="row justify-content-center">
        {props.education.map((edu, index) => {
          return (
            <div key={uniqid()} className="col-md- wrapper card p-2 m-2">
              <h6>{index}</h6>
              <h3 className="school">{edu.school}</h3>
              <h4 className="degree">{edu.degree}</h4>
              <h4 className="Focus">{edu.focus}</h4>
              <h4 className="yearGraduated">{edu.yearGraduated}</h4>
            </div>
          );
        })}
      </div>
      {/* end /.row */}
    </div>
  );
};

export default Education;
