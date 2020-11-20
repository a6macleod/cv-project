//update to be edit education
import React from "react";

class EditEducation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log(fieldName, fieldValue);
    this.props.handleChangeEducation(fieldName, fieldValue);
  }

  render() {
    return (
      <div className="mt-2 mb-5">
        <form>
          <h2>Education</h2>
          <div
            role="button"
            className="btn btn-primary mb-2"
            onClick={this.props.saveEdit}
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
                  value={this.props.education.undergradSchool}
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="degree">
                  Degree:
                </label>
                <input
                  type="text"
                  name="undergradDegree"
                  value={this.props.education.undergradDegree}
                  onChange={this.handleChange}
                />
              </div>

              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="focus">
                  Focus:
                </label>
                <input
                  type="text"
                  name="undergradFocus"
                  value={this.props.education.undergradFocus}
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="yearGraduated">
                  Year Graduated:
                </label>
                <input
                  type="number"
                  name="undergradYearGraduated"
                  value={this.props.education.undergradYearGraduated}
                  onChange={this.handleChange}
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
                  value={this.props.education.graduateSchool}
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="degree">
                  Degree:
                </label>
                <input
                  type="text"
                  name="graduateDegree"
                  value={this.props.education.graduateDegree}
                  onChange={this.handleChange}
                />
              </div>

              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="focus">
                  Focus:
                </label>
                <input
                  type="text"
                  name="graduateFocus"
                  value={this.props.education.graduateFocus}
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="yearGraduated">
                  Year Graduated:
                </label>
                <input
                  type="number"
                  name="graduateYearGraduated"
                  value={this.props.education.graduateYearGraduated}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.row */}
        </form>
      </div>
    );
  }
}

export default EditEducation;
