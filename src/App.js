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

    // this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    // this.handleChangeEducation = this.handleChangeEducation.bind(this);
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

  handleChangeEducation(fieldName, fieldValue, index) {
    let edu = [...this.state.education];
    let targetEdu = { ...edu[index] };
    targetEdu[fieldName] = fieldValue;
    edu[index] = targetEdu;
    this.setState({
      education: [...edu],
    });
  }

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
    return (
      <div className="App container">
        <GeneralInformation />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
