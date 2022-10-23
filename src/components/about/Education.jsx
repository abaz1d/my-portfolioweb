import React from "react";

const educationContent = [
  {
    degree: "Cognitive Sciences",
    institute: "University of Maine",
    year: "2018 - 2020",
    details: `The goal of cognitive science is to understand the principles of
    intelligence with the hope that this will lead to better
    comprehension.`,
  },
  {
    degree: "Civil Engineering",
    institute: "University of Texas",
    year: "2016 - 2017",
    details: ` Civil engineering is arguably the oldest engineering discipline.
    It deals with the built environment and can be dated to the first
    time someone placed a roof.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.degree}</h3>
                <span>{val.institute}</span>
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

export default Education;
