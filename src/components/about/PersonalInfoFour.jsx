import React from "react";
import { Trans, useTranslation } from 'react-i18next';

const PersonalInfoFour = () => {
  const { t } = useTranslation();

  const personalDetails = [
    { title: `${t('name')}`, info: "Abdul Aziz" },
    { title: `${t('birthday')}`, info: "12 September 2002" },
    { title: `${t('mail')}`, info: "abaz.my.id@gmail.com" },
    { title: `${t('phone')}`, info: "+62 85 155 388 644" },
    { title: `${t('address')}`, info: "Beji, 04/13, Tambakaji, Ngaliyan, Semarang" },
    { title: `${t('nationality')}`, info: "Indonesia" },
  ];
  return (
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/13.jpg"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{t('meta')}</span>
          <h3>{t('title')}</h3>
        </div>
        <div className="bigger_text">
          <p><Trans components={{br: <br />}}>{t('iam')}</Trans></p>
        </div>
        <div className="text">
          <p><Trans components={{a: <a style={{color: "#ccc"}} />}}>{t('description')}</Trans></p>
        </div>
        <div className="know_tm_button">
          <a href="img/cv/1.jpg" download>
            {t('download-cv')}
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfoFour;
