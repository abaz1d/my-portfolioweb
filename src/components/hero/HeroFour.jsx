import React from "react";
import { Trans, useTranslation } from 'react-i18next';

const HeroFour = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* <!-- HERO --> */}
      <div className="iknow_tm_hero_third iknow_tm_hero_fifth" id="home">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/hero/10.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End background */}

        <div className="content">
          <div className="avatar">
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/11.jpg"
                })`,
              }}
            ></div>
          </div>
          <span className="hello">{t('hello')}</span>
          <h3 className="name">Abdul Aziz</h3>
          <p className="text">
            <Trans components={{i: <i />, br: <br />}}>
              {t('iam')}
            </Trans>
          </p>
          <img className="sign" src="img/hero/sign.png" alt="hero" />
        </div>
        {/* End .content */}
      </div>
      {/* <!-- /HERO --> */}
    </div>
  );
};

export default HeroFour;
