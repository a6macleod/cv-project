import React, { useState } from "react";
import EditGeneralInfo from "./EditGeneralInfo";

const GeneralInformation = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    editView: false,
    name: "Andrew MacLeod",
    email: "a6macleod@gmail.com",
    phone: "(734)-395-0000",
  });

  const handleChangeGeneral = (fieldName, fieldValue) => {
    setGeneralInfo({
      ...generalInfo,
      [fieldName]: fieldValue,
    });
  };

  const editInfo = () => {
    setGeneralInfo({
      ...generalInfo,
      editView: true,
    });
  };

  const saveEdit = () => {
    setGeneralInfo({
      ...generalInfo,
      editView: false,
    });
  };

  if (generalInfo.editView) {
    return (
      <EditGeneralInfo
        generalInfo={generalInfo}
        handleChangeGeneral={handleChangeGeneral}
        saveEdit={saveEdit}
      />
    );
  } else {
    return (
      <div className="mt-2 mb-5">
        <div className="row justify-content-center">
          <div className="card col-lg- d-flex justify-content-center mt-3 p-2">
            <h2>
              Contact Information
              <div className="btn" onClick={editInfo}>
                <i className="text-muted fas fa-pencil-alt"></i>
              </div>
            </h2>

            <div className="wrapper d-flex justify-content-center align-items-center">
              <h4 className="mr-3 text-muted">Name:</h4>
              <h3 className="name">{generalInfo.name}</h3>
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <h4 className="mr-3 text-muted">Email:</h4>
              <h3 className="email">{generalInfo.email}</h3>
            </div>
            <div className="wrapper d-flex justify-content-center align-items-center">
              <h4 className="mr-3 text-muted">Phone Number:</h4>
              <h3 className="phone">{generalInfo.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GeneralInformation;
