import React from "react";

const ModalTwo = () => {
  return (
    <div className="service_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/2.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}
      <h3 clsssName="title">Prototype</h3>
      <div clsssName="description">
        <p>
          Know is a leading web design agency with an award-winning design team
          that creates innovative, effective websites that capture your brand,
          improve your conversion rates, and maximize your revenue to help grow
          your business and achieve your goals.
        </p>
        <p>
          In today’s digital world, your website is the first interaction
          consumers have with your business. That's why almost 95 percent of a
          user’s first impression relates to web design. It’s also why web
          design services can have an immense impact on your company’s bottom
          line.
        </p>
        <p>
          That’s why more companies are not only reevaluating their website’s
          design but also partnering with Kura, the web design agency that’s
          driven more than $2.4 billion in revenue for its clients. With over 50
          web design awards under our belt, we're confident we can design a
          custom website that drives sales for your unique business.
        </p>
      </div>
    </div>
  );
};

export default ModalTwo;
