import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log(fieldName, fieldValue);
    this.props.handleChangeGeneral(fieldName, fieldValue);
  }

  render() {
    return (
      <div className="mt-2 mb-5">
        <form>
          <div className="row justify-content-center">
            <div className="card col-md- d-flex justify-content-center mt-3 p-2">
              <h2>Contact Information</h2>
              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="name mr-3 text-muted">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={this.props.general.name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="mr-3 text-muted">Email:</label>
                <input
                  className="email"
                  name="email"
                  value={this.props.general.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="wrapper d-flex justify-content-center align-items-center">
                <label className="mr-3 text-muted">Phone Number:</label>
                <input
                  className="phone"
                  name="phone"
                  value={this.props.general.phone}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="submit"
                onClick={() => {
                  this.props.saveEdit();
                }}
              />
            </div>
            {/* /.card */}
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
