import React from "react";
import uniqid from "uniqid";

const Experience = (props) => {
  return (
    <div className="mb-2">
      <h2>Work Experience</h2>
      <div className="row justify-content-center">
        {props.experience.map((exp) => {
          return (
            <div key={uniqid()} className="col-sm- wrapper card p-2 m-2">
              <h3 key={uniqid()} className="jobTitle">
                {exp.jobTitle}
              </h3>
              <h4 key={uniqid()} className="company">
                {exp.company}
              </h4>
              <div className="wrapper">
                <h4 key={uniqid()} className="duties">
                  Duties
                </h4>
                <ul>
                  {exp.duties.map((duty) => {
                    return <li key={uniqid()}>{duty}</li>;
                  })}
                </ul>
              </div>
              <h4 key={uniqid()} className="startYear">
                Start: {exp.startYear}
              </h4>
              <h4 key={uniqid()} className="endYear">
                End: {exp.endYear}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
