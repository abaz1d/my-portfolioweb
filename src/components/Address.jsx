import React from "react";

const addressContent = [
  {
    icon: "icon-smartphone",
    title: "Call Me",
    info: "+123 456 7890",
    href: "Tel: +452 666 386",
  },
  {
    icon: "icon-letter",
    title: "Email Us",
    info: "hello@iknow.com",
    href: "mailto:ib-themes21@gmail.com",
  },
  {
    icon: "icon-placeholder",
    title: "Address",
    info: "20, Bardeshi, Amin Bazar",
    href: "",
  },
];

const Address = () => {
  return (
    <ul>
      {addressContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <span className="icon">
              <span className={`svg ${val.icon}`}></span>
            </span>
            <div className="short">
              <h3>{val.title}</h3>
              <span>
                <a href={val.href}>{val.info}</a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
