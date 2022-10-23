import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="know_tm_main_section">
        <div className="know_tm_portfolio">
          <div className="know_tm_main_title">
            <span>Resume</span>
            <h3>My works that I did for clients</h3>
          </div>

          <Tabs>
            <TabList className="portfolio_filter">
              <Tab>All</Tab>
              {/* All */}
              <Tab>Vimeo</Tab>
              {/* For Vimeo */}
              <Tab>Youtube</Tab>
              {/* For Youtube */}
              <Tab>Photography</Tab>
              {/* For Images */}
              <Tab>Details</Tab>
              {/* For Popup Details */}
            </TabList>
            {/* END TABLIST */}

            <div className="portfolio_list">
              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <img
                          src="/img/portfolio/1.jpg"
                          alt="Vimeo"
                          onClick={() => setOpen2(true)}
                        />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-vimeo svg"></span>
                      <div className="details">
                        <span>Vimeo</span>
                        <h3>Teresa Butler</h3>
                      </div>
                    </div>
                  </li>
                  {/* END VIMEO */}

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img
                          src="/img/portfolio/2.jpg"
                          alt="Youtube"
                          onClick={() => setOpen(true)}
                        />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-youtube-2 svg"></span>
                      <div className="details">
                        <span>Youtube</span>
                        <h3>Ashely Flores</h3>
                      </div>
                    </div>
                  </li>
                  {/* END YOUTUBE */}

                    <li data-aos="fade-right" data-aos-delay="200">
                      <div className="list_inner">
                        <div className="image">
                          <a href="//img/portfolio/3.jpg">
                            <img src="/img/portfolio/3.jpg" alt="Profile Shoot" />
                          </a>
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-photoshop svg"></span>
                        <div className="details">
                          <span>Photo shoot</span>
                          <h3>Derek Smith</h3>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                    <li data-aos="fade-right" data-aos-delay="0">
                      <div className="list_inner">
                        <div className="image">
                          <a href="//img/portfolio/6.jpg">
                            <img src="/img/portfolio/6.jpg" alt="Besh Award" />
                          </a>
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-photoshop svg"></span>
                        <div className="details">
                          <span>Photo shoot</span>
                          <h3>Gloria Genkins</h3>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThree}>
                        <img src="/img/portfolio/7.jpg" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Selena Gomez</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}

                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFour}>
                        <img src="/img/portfolio/8.jpg" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Ave Simone</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END ALL All */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right">
                    <div className="list_inner">
                      <div className="image">
                        <img
                          src="/img/portfolio/1.jpg"
                          alt="Vimeo"
                          onClick={() => setOpen2(true)}
                        />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-vimeo svg"></span>
                      <div className="details">
                        <span>Vimeo</span>
                        <h3>Teresa Butler</h3>
                      </div>
                    </div>
                  </li>
                  {/* END VIMEO */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END VIMEO VIDEO */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image">
                        <img
                          src="/img/portfolio/2.jpg"
                          alt="Youtube"
                          onClick={() => setOpen(true)}
                        />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-youtube-2 svg"></span>
                      <div className="details">
                        <span>Youtube</span>
                        <h3>Ashely Flores</h3>
                      </div>
                    </div>
                  </li>
                  {/* END YOUTUBE */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END YOUTUBE VIDEO */}

              <TabPanel>
                <ul className=" gallery_zoom">
                    <li data-aos="fade-right" data-aos-delay="200">
                      <div className="list_inner">
                        <div className="image">
                          <a href="//img/portfolio/3.jpg">
                            <img src="/img/portfolio/3.jpg" alt="Profile Shoot" />
                          </a>
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-photoshop svg"></span>
                        <div className="details">
                          <span>Photo shoot</span>
                          <h3>Derek Smith</h3>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                    <li data-aos="fade-right" data-aos-delay="0">
                      <div className="list_inner">
                        <div className="image">
                          <a href="//img/portfolio/6.jpg">
                            <img src="/img/portfolio/6.jpg" alt="Besh Award" />
                          </a>
                        </div>
                        <div className="overlay"></div>
                        <span className="icon-photoshop svg"></span>
                        <div className="details">
                          <span>Photo shoot</span>
                          <h3>Gloria Genkins</h3>
                        </div>
                      </div>
                    </li>
                    {/* END SHOT */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END PHOTOGRAHY */}

              <TabPanel>
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThree}>
                        <img src="/img/portfolio/7.jpg" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Selena Gomez</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="200">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFour}>
                        <img src="/img/portfolio/8.jpg" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Ave Simone</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}
                </ul>
                {/* END DETAILS GALLERY */}
              </TabPanel>
              {/* END Details Gallery */}
            </div>
            {/* END LIST WRAPPER */}
          </Tabs>
        </div>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      />
      {/* End Vimeo Modal Video */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/7.jpg)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Teresa Melbig</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance ease of
                          modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you're trying to figure
                          out your user flows or the proper visual hierarchy -
                          and the production phase when they will represent the
                          target product.
                        </p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span>
                              <a href="/#">Detail</a>
                            </span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>March 07, 2021</span>
                          </li>
                          <li>
                            <span className="first">Share</span>
                            <ul className="share">
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/facebook.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/twitter.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/instagram.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/1.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/2.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/3.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/8.jpg)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Teresa Melbig</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance ease of
                          modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you're trying to figure
                          out your user flows or the proper visual hierarchy -
                          and the production phase when they will represent the
                          target product.
                        </p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span>
                              <a href="/#">Detail</a>
                            </span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>March 07, 2021</span>
                          </li>
                          <li>
                            <span className="first">Share</span>
                            <ul className="share">
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/facebook.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/twitter.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/instagram.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/1.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/2.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/3.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </div>
  );
};

export default Portfolio;
