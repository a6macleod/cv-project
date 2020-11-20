import React from "react";

const EditExperience = (props) => {
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    props.handleChangeExperience(fieldName, fieldValue);
  };

  return (
    <div className="mt-2 mb-5">
      <form>
        <h2>Experience</h2>
        <div
          role="button"
          className="btn btn-primary mb-2"
          onClick={props.saveEdit}
        >
          <i class="fas fa-check-circle"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg- wrapper card p-2 m-2">
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="title">
                Job Title:
              </label>
              <input
                type="text"
                name="title"
                value={props.experience.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="company">
                Company:
              </label>
              <input
                type="text"
                name="company"
                value={props.experience.company}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center mt-2 mb-2">
              <label className="name mr-3 text-muted" htmlFor="duties">
                Duties:
              </label>
              <div className="d-flex flex-column">
                <textarea
                  id="experienceDuty"
                  cols="30"
                  rows="10"
                  type="textarea"
                  name="duties"
                  value={props.experience.duties}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="startYear">
                Start Year:
              </label>
              <input
                type="number"
                name="startYear"
                value={props.experience.startYear}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="endYear">
                End Year:
              </label>
              <input
                type="number"
                name="endYear"
                value={props.experience.endYear}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* /.row */}
      </form>
    </div>
  );
};

export default EditExperience;
