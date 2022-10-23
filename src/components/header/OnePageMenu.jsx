import React from "react";
import Scrollspy from "react-scrollspy";
import { useTranslation } from 'react-i18next';


const OnePageMenu = () => {
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
  return (
    <>
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
            <a className="iknow_tm_full_link" href={val.itemRoute}>
              <div className={`svg ${val.icon}`}></div>
              <span>{val.itemName}</span>
            </a>
          </li>
        ))}
      </Scrollspy>
    </>
  );
};

export default OnePageMenu;
