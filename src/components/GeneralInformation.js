import React, { useState } from "react";

const GeneralInformation = (props) => {
  const [name, setName] = useState("Andrew MacLeod");
  const [email, setEmail] = useState("a6macleod@gmail.com");
  const [phone, setPhone] = useState("(734)-395-0000");

  return (
    <div className="mt-2 mb-5">
      <div className="row justify-content-center">
        <div className="card col-lg- d-flex justify-content-center mt-3 p-2">
          <h2>Contact Information</h2>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Name:</h4>
            <h3 className="name">{name}</h3>
          </div>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Email:</h4>
            <h3 className="email">{email}</h3>
          </div>
          <div className="wrapper d-flex justify-content-center align-items-center">
            <h4 className="mr-3 text-muted">Phone Number:</h4>
            <h3 className="phone">{phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
