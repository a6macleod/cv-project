import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Edit from "./components/Edit";
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
          view: true,
          school: "Western Michigan University",
          degree: "Bachelor of Science",
          focus: "Geochemistry",
          yearGraduated: "2010",
        },
        {
          view: true,
          school: "Western Michigan University",
          degree: "Master of Science",
          focus: "Geochemistry",
          yearGraduated: "2013",
        },
      ],
      experience: [
        {
          view: true,
          jobTitle: "Senior Technical Reviewer",
          company: "NSF International",
          duties: ["QC Technical Reviewer work", "Coordiante required testing"],
          startYear: "2014",
          endYear: "present",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  saveEdit = (e) => {
    console.log("saveEditclicked!");
  };

  handleChange = (e) => {
    console.log(e.target.value);
    let temp = { ...this.state.general };
    temp.name = e.target.value;
    this.setState({
      general: temp,
    });
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  };

  handleClick = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const editMode = this.state.edit;
    if (editMode) {
      return (
        <Edit
          edit={this.state.edit}
          general={this.state.general}
          handleChange={this.handleChange}
        />
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
