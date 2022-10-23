import React from "react";
import HeaderSixDark from "../components/header/HeaderSixDark";
import Footer from "../components/footer/Footer";
import HeroFour from "../components/hero/HeroFour";
import PersonalInfoFour from "../components/about/PersonalInfoFour";
import Resume from "../components/about/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import Blog from "../components/blog/Blog";
import Contact from "../components/Contact";
import Address from "../components/Address";
import SocialTwo from "../components/SocialTwo";
import OnePageMenu from "../components/header/OnePageMenu";
import SidebarTwo from "../components/header/SidebarTwo";

const PageHome = () => {
  document.body.classList.add("dark");
  return (
    <div className="iknow_tm_extra_demo_2 ">
      <span className="top_shape"></span>
      <span className="bottom_shape"></span>

      {/* <!-- BACKGROUND --> */}
      <div
        className="know_tm_fixed_background movingEffect"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/5.jpg"})`,
        }}
      ></div>
      {/* <!-- /BACKGROUND --> */}

      <div className="iknow_tm_topbar know_tm_topbar smaller onepage">
        <HeaderSixDark />
        {/* End header five */}
      </div>
      <div className="iknow_tm_extra_demo">
        {" "}
        <SidebarTwo />
      </div>

      <div className="iknow_tm_mainpart_new_2">
        <div className="social_list">
          <SocialTwo />
        </div>
        {/* End social_list */}

        {/* <!-- MENU --> */}
        <div className="main_menu">
          <OnePageMenu />
        </div>
        {/* <!-- /MENU --> */}

        {/* <!-- HERO --> */}
        <HeroFour />
        {/* <!-- /HERO --> */}

        {/* <!-- ABOUT --> */}
        <div className="iknow_tm_section_new" id="about">
          <div className="iknow_tm_about">
            <PersonalInfoFour />
          </div>
        </div>
        {/* <!-- /ABOUT --> */}

        {/* <!-- RESUME --> */}
        <div className="iknow_tm_section_new" id="resume">
          <div className="iknow_tm_resume">
            <Resume />
          </div>
        </div>
        {/* <!-- /RESUME --> */}

        {/* <!-- PORTFOLIO --> */}
        <div className="iknow_tm_section_new" id="portfolio">
          <div className="iknow_tm_portfolio">
            <Portfolio />
          </div>
        </div>
        {/* <!-- /PORTFOLIO --> */}

        {/* <!-- SERVICE --> */}
        <div className="iknow_tm_section_new" id="service">
          <div className="iknow_tm_services">
            <Service />
          </div>
        </div>
        {/* <!-- /SERVICE --> */}

        {/* <!-- TESTIMONIAL --> */}
        <div className="iknow_tm_section_new" id="testimonial">
          <div className="know_tm_testimonials">
            <div className="know_tm_main_title">
              <span>Testimonials</span>
              <h3>What people say about me</h3>
            </div>
            <div className="testimonials_list">
              <Testimonial />
            </div>
          </div>
        </div>
        {/* <!-- /TESTIMONIAL --> */}

        {/* <!-- BLOG --> */}
        <div className="iknow_tm_section_new" id="news">
          <div className="know_tm_news">
            <div className="know_tm_main_title">
              <span>Blog</span>
              <h3>Latest tips, tricks &amp; Updates</h3>
            </div>
            {/* End .know_tm_main_title */}
            <Blog />
          </div>
        </div>
        {/* <!-- /BLOG --> */}

        {/* <!-- CONTACT --> */}
        <div className="iknow_tm_section_new" id="contact">
          <div className="know_tm_contact">
            <div className="know_tm_main_title">
              <span>Contact Me</span>
              <h3>Contact me to get your work done</h3>
            </div>
            <div className="wrapper">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Address />
              </div>
              {/* End .left */}
              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="fields">
                  <Contact />
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .know_tm_contact */}
        </div>
        {/* <!-- /CONTACT --> */}

        {/* <!-- COPYRIGHT --> */}
        <div className="know_tm_copyright iknow_tm_copyright smaller onepage empty">
          <div className="container">
            <Footer />
          </div>
        </div>
        {/* <!-- /COPYRIGHT --> */}
      </div>
    </div>
  );
};

export default PageHome;
