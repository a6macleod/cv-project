import React from "react";
import EditGeneralInfo from "./EditGeneralInfo";

class Edit extends React.Component {
  render() {
    return (
      <EditGeneralInfo
        edit={this.state.edit}
        general={this.state.general}
        handleChangeGeneral={this.handleChangeGeneral}
        saveEdit={this.saveEdit}
      />
    );
  }
}

export default Edit;
