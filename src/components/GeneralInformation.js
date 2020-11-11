import React from "react";

const GeneralInformation = (props) => {
  // enter education info
  return (
    <div className="mt-2 mb-5">
      <div className="row justify-content-center">
        <div className="card col-lg- d-flex justify-content-center mt-3 p-2">
          <h2>Contact Information</h2>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Name:</h4>
            <h3 className="name">{props.name}</h3>
          </div>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Email:</h4>
            <h3 className="email">{props.email}</h3>
          </div>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Phone Number:</h4>
            <h3 className="phone">{props.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
