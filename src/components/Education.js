import React from "react";
import uniqid from "uniqid";

const Education = (props) => {
  return (
    <div className="mb-5">
      <h2>Education Experience</h2>
      <div className="row justify-content-center">
        {props.education.map((edu) => {
          return (
            <div key={uniqid()} className="col-md- wrapper card p-2 m-2">
              <h3 key={uniqid()} className="school">
                {edu.school}
              </h3>
              <h4 key={uniqid()} className="degree">
                {edu.degree}
              </h4>
              <h4 key={uniqid()} className="Focus">
                {edu.focus}
              </h4>
              <h4 key={uniqid()} className="yearGraduated">
                {edu.yearGraduated}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
