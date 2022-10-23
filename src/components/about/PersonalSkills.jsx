import React from "react";

const skillContent = [
  {
    label: "Time Management",
    percentagePosition: "10%",
    percentageNo: "90%",
  },
  {
    label: "Effeciency",
    percentagePosition: "30%",
    percentageNo: "70%",
  },
  {
    label: "Intigrity",
    percentagePosition: "20%",
    percentageNo: "80%",
  },
];

const PersonalSkills = () => {
  return (
    <div className="personal">
      <div className="dodo_progress">
        {skillContent.map((val, i) => (
          <div className="progress_inner" key={i}>
            <span>
              <span className="label">{val.label}</span>
              <span
                className="number"
                style={{ right: val.percentagePosition }}
              >
                {val.percentageNo}
              </span>
            </span>
            <div className="background">
              <div className="bar">
                <div
                  className="bar_in"
                  style={{ width: val.percentageNo }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSkills;
