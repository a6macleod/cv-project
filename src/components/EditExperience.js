import React from "react";

class EditExperience extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.props.handleChangeExperience(fieldName, fieldValue);
  }

  render() {
    return (
      <div className="mt-2 mb-5">
        <form>
          <h2>Experience</h2>
          <div
            role="button"
            className="btn btn-primary mb-2"
            onClick={this.props.saveEdit}
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
                  value={this.props.experience.jobTitle}
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="company">
                  Company:
                </label>
                <input
                  type="text"
                  name="company"
                  value={this.props.experience.company}
                  onChange={this.handleChange}
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
                    value={this.props.experience.duties}
                    onChange={this.handleChange}
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
                  value={this.props.experience.startYear}
                  onChange={this.handleChange}
                />
              </div>

              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted" htmlFor="endYear">
                  End Year:
                </label>
                <input
                  type="number"
                  name="endYear"
                  value={this.props.experience.endYear}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          {/* /.row */}
        </form>
      </div>
    );
  }
}

export default EditExperience;
