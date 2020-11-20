import React from "react";

const EditGeneralInfo = (props) => {
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    props.handleChangeGeneral(fieldName, fieldValue);
  };

  return (
    <div className="mt-2 mb-5">
      <form>
        <div className="row justify-content-center">
          <div className="card col-md- d-flex justify-content-center mt-3 p-2">
            <h2>Contact Information</h2>
            <div
              role="button"
              className="btn btn-primary mb-2"
              onClick={props.saveEdit}
            >
              <i class="fas fa-check-circle"></i>
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="name mr-3 text-muted">Name:</label>
              <input
                type="text"
                name="name"
                value={props.generalInfo.name}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="mr-3 text-muted">Email:</label>
              <input
                className="email"
                name="email"
                value={props.generalInfo.email}
                onChange={handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="mr-3 text-muted">Phone Number:</label>
              <input
                className="phone"
                name="phone"
                value={props.generalInfo.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* /.card */}
        </div>
      </form>
    </div>
  );
};

export default EditGeneralInfo;
