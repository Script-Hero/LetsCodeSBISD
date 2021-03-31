import "./main.css";
import "../fonts.css";
import React from "react";

// Components
import Header from "./header/header.js";
import TeamSection from "./team-section/team-section.js";
import CurriculumSection from "./curriculum-section/curriculum";
import MissionStatementSection from "./mission-statement-section/mission-statement-section";
import SessionsSection from "./sessions-section/sessions-section";
import ScheduleSection from "./schedule-section/schedule";
import SignupSection from "./signup-section/signup-section";
import ContactSection from "./contact-section/contact";

import LanguageContext from "./../contexts/LanguageContext";

class MainPage extends React.Component {
  render() {
    let lang = "english";

    return (
      <html>
        <head></head>
        <body>
          <div id="wrapper">
            <LanguageContext.Provider value={lang}>
              <Header />
              <TeamSection />
              <CurriculumSection />
              <MissionStatementSection />
              <SessionsSection />
              <ScheduleSection />
              <SignupSection />
              <ContactSection />
            </LanguageContext.Provider>
          </div>
        </body>
      </html>
    );
  }
}

export default MainPage;