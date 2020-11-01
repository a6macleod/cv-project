import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Andrew MacLeod",
      email: "a6macleod@gmail.com",
      phone: "(734)-395-0000",
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
          endYear: "present",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App container">
        <GeneralInformation
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Education education={this.state.education} />
        <Experience experience={this.state.experience} />
      </div>
    );
  }
}

export default App;
