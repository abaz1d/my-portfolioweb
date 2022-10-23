import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalSkills from "./PersonalSkills";
import SoftwareSkills from "./SoftwareSkills";

const Resume = () => {
  return (
    // <!-- RESUME -->
    <>
      <div className="know_tm_resume" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>Resume</span>
          <h3>Combination of Skill &amp; Experience</h3>
        </div>
        {/* End  .know_tm_resume_title */}

        <div className="resume_inner">
          <div className="left">
            <div className="info_list">
              <div className="know_tm_resume_title">
                <h3>Education</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <Education />
            </div>
            <div className="info_list">
              <div className="know_tm_resume_title">
                <h3>Experience</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <Experience />
            </div>
          </div>
          {/* End left */}

          <div className="right">
            <div className="skills_list">
              <div className="know_tm_resume_title">
                <h3>Personal Skills</h3>
                <span className="shape"></span>
              </div>
              {/* End  .know_tm_resume_title */}
              <PersonalSkills />
            </div>
            {/* End skills_list */}

            <div className="skills_list">
              <div className="know_tm_resume_title">
                <h3>Software Skills</h3>
                <span className="shape"></span>
              </div>

              <SoftwareSkills />
            </div>
            {/* End skills_list */}
          </div>
        </div>
      </div>
    </>
    // <!-- /RESUME -->
  );
};

export default Resume;
