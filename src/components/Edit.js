import React from "react";

const Edit = (props) => {
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
                value={props.general.name}
                onChange={props.handleChange}
              />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="mr-3 text-muted">Email:</label>
              <input className="email" value={props.general.email} />
            </div>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <label className="mr-3 text-muted">Phone Number:</label>
              <input className="phone" value={props.general.phone} />
            </div>
            <input
              type="submit"
              onClick={() => {
                props.saveEdit();
              }}
            />
          </div>
          {/* /.card */}
        </div>
      </form>
    </div>
  );
};

export default Edit;
