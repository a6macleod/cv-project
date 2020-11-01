import React from "react";

const GeneralInformation = (props) => {
  // enter education info
  return (
    <div className="">
      <div className="wrapper">
        <h1 className="name">{props.name}</h1>
      </div>
      <div className="card">
        <h2>Contact Information</h2>
        <div className="wrapper d-flex align-items-center">
          <h4 className="mr-3 text-muted">Email:</h4>
          <h3 className="email">{props.email}</h3>
        </div>
        <div className="wrapper d-flex align-items-center">
          <h4 className="mr-3 text-muted">Phone Number:</h4>
          <h3 className="phone">{props.phone}</h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
