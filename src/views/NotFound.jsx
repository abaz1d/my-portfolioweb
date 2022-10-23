import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/5.jpg"})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            {t('404')}
          </p>

          <div
            className="know_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">{t('back-home')}</Link>
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  );
};

export default NotFound;
