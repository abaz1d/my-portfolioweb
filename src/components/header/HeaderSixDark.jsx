import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const logo = "img/logo/light.png";

const HeaderSixDark = () => {
  const { i18n } = useTranslation();
  const onChange = (event) => {
    let lng = event.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <div className="topbar_inner">
      <div className="logo">
        <Link to="/a">
          {" "}
          <img src={logo} alt="brand" />
        </Link>
      </div>
      <div className="right">
        <div className="know_tm_button fixedVersion">
          {/* <a href="img/cv/1.jpg" download>
            Download CV
          </a> */}
          <select name="language" value={i18n.language} onChange={onChange} className="form-select">
            <option value="id">🇮🇩</option>
            <option value="en">🇬🇧</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderSixDark;
