import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";

const SoftwareSkills = () => {
  return (
    <div className="software">
      <div className="circular_progress_bar">
        <ul>
          <li>
            <div className="list_inner">
              <div style={{ width: "200px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 80 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>

                <div className="title">
                  <h3>Ms Office</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "200px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Photoshop</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "200px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Illustrator</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "200px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 65 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkills;
