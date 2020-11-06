import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import EditGeneralInfo from "./components/EditGeneralInfo";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      general: {
        view: true,
        name: "Andrew MacLeod",
        email: "a6macleod@gmail.com",
        phone: "(734)-395-0000",
      },
      education: [
        {
          school: "Western Michigan University",
          degree: "Bachelor of Science",
          focus: "Geochemistry",
          yearGraduated: "2010",
        },
        {
          school: "Western Michigan University",
          degree: "Master of Science",
          focus: "Geochemistry",
          yearGraduated: "2013",
        },
      ],
      experience: [
        {
          jobTitle: "Senior Technical Reviewer",
          company: "NSF International",
          duties: ["QC Technical Reviewer work", "Coordiante required testing"],
          startYear: "2014",
          endYear: "2020",
        },
      ],
    };

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  saveEdit(e) {
    this.setState({
      edit: false,
    });
  }

  handleChangeGeneral(fieldName, fieldValue) {
    this.setState({
      general: {
        ...this.state.general,
        [fieldName]: fieldValue,
      },
    });
  }

  handleChangeEducation(fieldName, fieldValue, index) {
    let edu = [...this.state.education];
    let targetEdu = { ...edu[index] };
    targetEdu.[fieldName] = fieldValue;
    edu[index] = targetEdu;
    this.setState({
      education: [ ...edu ]
    });
  }

  handleChangeExperience(fieldName, fieldValue, index) {
    let exp = [...this.state.experience];
    let targetExp = { ...exp[index] };
    targetExp.[fieldName] = fieldValue;
    exp[index] = targetExp;
    this.setState({
      experience: [ ...exp ]
    });
  }

  handleClick = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const editMode = this.state.edit;
    if (editMode) {
      return (
        <div className="App container">
          <EditGeneralInfo
            edit={this.state.edit}
            general={this.state.general}
            handleChangeGeneral={this.handleChangeGeneral}
            saveEdit={this.saveEdit}
          />
          <EditEducation
            edit={this.state.edit}
            education={this.state.education}
            handleChangeEducation={this.handleChangeEducation}
            saveEdit={this.saveEdit}
          />
          <EditExperience
            edit={this.state.edit}
            experience={this.state.experience}
            handleChangeExperience={this.handleChangeExperience}
            saveEdit={this.saveEdit}
          />
        </div>
      );
    } else {
      return (
        <div className="App container">
          <GeneralInformation
            name={this.state.general.name}
            email={this.state.general.email}
            phone={this.state.general.phone}
            view={this.state.general.view}
            handleClick={this.handleClick}
          />
          <Education education={this.state.education} />
          <Experience experience={this.state.experience} />
        </div>
      );
    }
  }
}

export default App;
