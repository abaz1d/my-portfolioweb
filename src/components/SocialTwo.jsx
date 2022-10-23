import React from "react";

const socialShare = [
  {
    img: "facebook-2",
    link: "https://www.facebook.com/",
  },
  { img: "twitter-2", link: "https://twitter.com/" },
  {
    img: "youtube-3",
    link: "https://www.youtube.com/",
  },
  {
    img: "linkedin-2",
    link: "https://www.linkedin.com/",
  },
];
const SocialTwo = () => {
  return (
    <ul>
      {socialShare.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="svg"
              src={`img/svg/social/${item.img}.svg`}
              alt="brand"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
