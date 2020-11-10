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
          duties:
            "QC Technical Reviewer work. Coordiante required testing between the account managers, clients, and laboratory.",
          startYear: "2014",
          endYear: "2020",
        },
      ],
    };

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addDuty = this.addDuty.bind(this);
  }

  addDuty() {
    let temp = [...this.state.experience];
    const newExperience = {
      jobTitle: "",
      company: "",
      duties: [],
      startYear: "",
      endYear: "",
    };
    const tempState = temp.concat(newExperience);
    this.setState({
      experience: tempState,
    });
  }

  deleteExperience(index) {
    let exp = [...this.state.experience];
    exp.splice(index, 1);
    this.setState({
      experience: [...exp],
    });
  }

  deleteEducation(index) {
    let edu = [...this.state.education];
    edu.splice(index, 1);
    this.setState({
      education: [...edu],
    });
  }

  addExperience() {
    let temp = [...this.state.experience];
    const newExperience = {
      jobTitle: "",
      company: "",
      duties: [],
      startYear: "",
      endYear: "",
    };
    const tempState = temp.concat(newExperience);
    this.setState({
      experience: tempState,
    });
  }

  addSchool() {
    let temp = [...this.state.education];
    const newSchool = {
      school: "",
      degree: "",
      focus: "",
      yearGraduated: "",
    };
    const tempState = temp.concat(newSchool);
    this.setState({
      education: tempState,
    });
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
    targetEdu[fieldName] = fieldValue;
    edu[index] = targetEdu;
    this.setState({
      education: [...edu],
    });
  }

  // handleChangeEducation(fieldName, fieldValue, index) {
  //   let edu = [...this.state.education];
  //   let targetEdu = { ...edu[index] };
  //   targetEdu[fieldName] = fieldValue;
  //   edu[index] = targetEdu;
  //   this.setState({
  //     education: [...edu],
  //   });
  // }

  handleChangeExperience(fieldName, fieldValue, index) {
    let exp = [...this.state.experience];
    let targetExp = { ...exp[index] };
    targetExp[fieldName] = fieldValue;
    exp[index] = targetExp;
    this.setState({
      experience: [...exp],
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
          />
          <EditEducation
            edit={this.state.edit}
            education={this.state.education}
            handleChangeEducation={this.handleChangeEducation}
            addSchool={this.addSection}
            deleteEducation={this.deleteEducation}
          />
          <EditExperience
            edit={this.state.edit}
            experience={this.state.experience}
            handleChangeExperience={this.handleChangeExperience}
            addExperience={this.addExperience}
            deleteExperience={this.deleteExperience}
          />
          <input
            className="mb-5"
            type="button"
            onClick={this.saveEdit}
            value="save"
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
          />
          <Education education={this.state.education} />
          <Experience experience={this.state.experience} />

          <button
            className="btn btn-primary mb-5 p-1"
            onClick={() => {
              this.handleClick();
            }}
          >
            edit<i className="p-2 far fa-edit"></i>
          </button>
        </div>
      );
    }
  }
}

export default App;
