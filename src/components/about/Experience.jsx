import React from "react";

const experienceContent = [
  {
    position: "Web Developer",
    compnayName: "Envato Market",
    year: "   2018 - Present",
    details: `  Web Developers are build a website’s core structure using coding
    languages, while designers are more visually creative and
    user-focused.`,
  },
  {
    position: " Creative Designer",
    compnayName: "Bahanno Digital",
    year: "2013 - 2018",
    details: ` Web Developers are build a website’s core structure using coding
    languages, while designers are more visually creative and
    user-focused.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.position}</h3>
                <span>{val.compnayName}</span>
              </div>
              <div className="year">
                <span>{val.year}</span>
              </div>
            </div>
            <div className="text">
              <p>{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
