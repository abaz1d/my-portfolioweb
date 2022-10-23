import Scrollspy from "react-scrollspy";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';



const SidebarTwo = () => {
  const { t } = useTranslation();
  // sidebar content
  const sidebarContent = [
    {
      icon: "icon-squares",
      itemName: `${t('nav-home')}`,
      itemRoute: "#home",
      activeClass: "current",
    },
    {
      icon: "icon-archive",
      itemName: `${t('nav-about')}`,
      itemRoute: "#about",
      activeClass: "",
    },
    {
      icon: "icon-contacs",
      itemName: `${t('nav-resume')}`,
      itemRoute: "#resume",
      activeClass: "",
    },
    {
      icon: "icon-briefcase",
      itemName: `${t('nav-portfolio')}`,
      itemRoute: "#portfolio",
      activeClass: "",
    },
    {
      icon: "icon-gear",
      itemName: `${t('nav-service')}`,
      itemRoute: "#service",
      activeClass: "",
    },
    {
      icon: "icon-writing",
      itemName: `${t('nav-blog')}`,
      itemRoute: "#news",
      activeClass: "",
    },
    {
      icon: "icon-letter",
      itemName: `${t('nav-contact')}`,
      itemRoute: "#contact",
      activeClass: "",
    },
  ];
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <button className="navbar-toggler" type="button" onClick={handleClick}>
        <div className={click ? "hamburger active" : "hamburger"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {/* <!-- SIDEBAR --> */}
      <div
        className={click ? "iknow_tm_sidebar_3 active" : "iknow_tm_sidebar_3"}
      >
        <div className={navbar ? "inner animate" : "inner"}>
          <div className="image">
            <div
              className="main"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/13.jpg"
                  })`,
              }}
            ></div>
          </div>
          {/* End image */}

          <div className="menu scrollable">
            <Scrollspy
              className="anchor_nav"
              items={[
                "home",
                "about",
                "resume",
                "portfolio",
                "service",
                "news",
                "contact",
              ]}
              currentClassName="current"
              offset={0}
            >
              {sidebarContent.map((val, i) => (
                <li className={val.activeClass} key={i}>
                  <a
                    className="iknow_tm_full_link"
                    href={val.itemRoute}
                    onClick={handleClick}
                  >
                    <div className={`svg ${val.icon}`}></div>
                    <span>{val.itemName}</span>
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </div>
      {/* <!-- /SIDEBAR --> */}
    </>
  );
};

export default SidebarTwo;
