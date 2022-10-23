import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
      avatar: "1",
      name: "Jecob Oramson",
      designation: "Designer",
      delayAnimation: "",
    },
    {
      desc: `The design is elegant. The customer support on this product is also amazing. I would highly recommend you to purchase templates from the ib-themes!`,
      avatar: "2",
      name: "Kerry Hudson",
      designation: "IBO. Corp",
      delayAnimation: "100",
    },
    {
      desc: `Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products in the future from this author.`,
      avatar: "3",
      name: "Albert Walker",
      designation: "Singer",
      delayAnimation: "200",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div
          className="list_inner"
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="in">
            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End .text */}

            <div className="details">
              <div className="left">
                <div className="avatar">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        `img/testimonials/${val.avatar}.jpg`
                      })`,
                    }}
                  ></div>
                </div>
                <div className="info">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <span className="icon-left-quote svg"></span>
              </div>
            </div>
            {/* End .details */}
          </div>
        </div>
      ))}
    </Slider>
  );
}
