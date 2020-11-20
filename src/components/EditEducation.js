//update to be edit education
import React from "react";

const EditEducation = (props) => {
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    props.handleChangeEducation(fieldName, fieldValue);
  };
  return (
    <div className="mt-2 mb-5">
      <form>
        <h2>Education</h2>
        <div
          role="button"
          className="btn btn-primary mb-2"
          onClick={props.saveEdit}
        >
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="row justify-content-center">
          {/* start .card */}
          <div className="col-md- wrapper card p-2 m-2">
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="school">
                School:
              </label>
              <input
                type="text"
                name="undergradSchool"
                value={props.education.undergradSchool}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="degree">
                Degree:
              </label>
              <input
                type="text"
                name="undergradDegree"
                value={props.education.undergradDegree}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="focus">
                Focus:
              </label>
              <input
                type="text"
                name="undergradFocus"
                value={props.education.undergradFocus}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="yearGraduated">
                Year Graduated:
              </label>
              <input
                type="number"
                name="undergradYearGraduated"
                value={props.education.undergradYearGraduated}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* /.card */}
          {/* start .card */}
          <div className="col-md- wrapper card p-2 m-2">
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="school">
                School:
              </label>
              <input
                type="text"
                name="graduateSchool"
                value={props.education.graduateSchool}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="degree">
                Degree:
              </label>
              <input
                type="text"
                name="graduateDegree"
                value={props.education.graduateDegree}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="focus">
                Focus:
              </label>
              <input
                type="text"
                name="graduateFocus"
                value={props.education.graduateFocus}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted" htmlFor="yearGraduated">
                Year Graduated:
              </label>
              <input
                type="number"
                name="graduateYearGraduated"
                value={props.education.graduateYearGraduated}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* /.card */}
        </div>
        {/* /.row */}
      </form>
    </div>
  );
};

export default EditEducation;
