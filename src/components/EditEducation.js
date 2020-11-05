//update to be edit education
import React from "react";
import uniqid from "uniqid";

class EditEducation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const index = e.target.getAttribute("data-index");
    this.props.handleChangeEducation(fieldName, fieldValue, index);
  }

  render() {
    return (
      <div className="mt-2 mb-5">
        <form>
          <h2>Education</h2>
          <div className="row justify-content-center">
            {this.props.education.map((edu, index) => {
              return (
                <div key={uniqid()} className="col-md- wrapper card p-2 m-2">
                  <div className="wrapper d-flex justify-content-center align-items-center">
                    <h4>Index: {index}</h4>
                    <label className="name mr-3 text-muted" htmlFor="school">
                      School:
                    </label>
                    <input
                      type="text"
                      name="school"
                      data-index={index}
                      value={edu.school}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="wrapper d-flex justify-content-center align-items-center">
                    <label className="name mr-3 text-muted" htmlFor="degree">
                      Degree:
                    </label>
                    <input
                      type="text"
                      name="degree"
                      data-index={index}
                      value={edu.degree}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="wrapper d-flex justify-content-center align-items-center">
                    <label className="name mr-3 text-muted" htmlFor="focus">
                      Focus:
                    </label>
                    <input
                      type="text"
                      name="focus"
                      data-index={index}
                      value={edu.focus}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="wrapper d-flex justify-content-center align-items-center">
                    <label
                      className="name mr-3 text-muted"
                      htmlFor="yearGraduated"
                    >
                      Year Graduated:
                    </label>
                    <input
                      type="number"
                      name="yearGraduated"
                      data-index={index}
                      value={edu.yearGraduated}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              );
            })}

            {/*<div className="wrapper d-flex justify-content-center align-items-center">
                 <label className="name mr-3 text-muted">School:</label>
                 <input
                   type="text"
                   name="name"
                   value={this.props.education.school}
                   onChange={this.handleChange}
                 />
               </div>*/}
          </div>
          {/* /.row */}
          <input type="button" onClick={this.props.saveEdit} value="save" />
        </form>
      </div>
    );
  }
}

export default EditEducation;
