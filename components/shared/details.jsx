import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function details(props) {
  //console.log(props);
  const [RelatedPost] = useState(props.details[1].Data);
  const [NewRecentPost] = useState(props.details[2].Data);
  const [Details] =
    props !== null &&
    props !== undefined &&
    props !== "" &&
    props.details[0] !== null
      ? useState(props.details[0].Data[0])
      : useState();
  return (
    <div>
      <div className="ksamvad grayBg">
        {" "}
        {Details !== null && Details !== undefined && Details !== "" ? (
          <div className="archives post post1 padding-top-0 productDetails">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bridcrumb">
                    {" "}
                    <a href="/">Home</a> / {Details.title}
                  </div>
                </div>
              </div>
              <div className="space-0"></div>
              <div className="row">
                <div className="col-md-6 col-lg-8 plist">
                  <div
                    className="white_bg border-radious5 shadow6"
                    style={{ minHeight: "900px", maxHeight: "900px" }}
                  >
                    <div className="padding20 ">
                      {Details.type === 2 ? (
                        <ReactPlayer
                          style={{ borderRadius: "10px" }}
                          className="dts-media-player"
                          url={`https://www.youtube.com/watch?v=${Details.img_video}`}
                        />
                      ) : (
                        <img
                          className="dts-media-player"
                          src={`http://localhost:3000/img/${Details.img_video}`}
                          alt={`http://localhost:3000/img/${Details.img_video}`}
                        />
                      )}

                      <div className="pt-2 white_bg">
                        <div className="row">
                          <div className="col-lg-6 align-self-center">
                            <div className="author">
                              <a href="/">{Details.posted_by}</a>
                              <ul>
                                <li>
                                  <a href="/">
                                    {Details.article_date},
                                    {Details.article_year}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 align-self-center">
                            <div className="author_social inline text-right">
                              <ul>
                                <li>
                                  <a href="/">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.facebook.com/pg/keshavksamvad/posts/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/watch">
                                    <i className="fab fa-youtube"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="single_post_heading mt-4">
                          <h1>{Details.title}</h1>
                        </div>
                      </div>

                      <div className="space-10"></div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: Details.description,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 sidebarComman plist">
                  <a href="/" className="listmenu">
                    <span className="bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </a>
                  <div className="listmenucontent">
                    <div className="widget category mb30 padding20 white_bg border-radious5 shadow6">
                      <div className="row">
                        <div className="col-6 align-self-center">
                          <h2 className="widget-title">श्रेणियाँ</h2>
                        </div>
                        <div className="col-6 text-right align-self-center">
                          {" "}
                          <a href="/" className="see_all">
                            सभी देखें
                          </a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <a href="/respected">
                            {" "}
                            <span>माननीय</span>
                          </a>
                        </li>
                        <li>
                          <a href="/listing/special_report">
                            {" "}
                            <span>विशेष रिपोर्ट</span>
                          </a>
                        </li>
                        <li>
                          <a href="/listing/special_edition1">
                            {" "}
                            <span>विशेष संस्करण 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="/listing/special_edition2">
                            {" "}
                            <span>विशेष संस्करण 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="/videogallery">
                            {" "}
                            <span>वीडियो गैलरी</span>
                          </a>
                        </li>
                        <li>
                          <a href="/imagegallery">
                            {" "}
                            <span>छवि गैलरी</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="trending_widget mb30 padding20 white_bg border-radious5 shadow6">
                      <h2 className="widget-title">नवीनतम लेख</h2>
                      <div className="borderTopListing"></div>
                      <div className="recent-postsc">
                        {" "}
                        {/*REPEAT*/}
                        {NewRecentPost !== undefined &&
                        NewRecentPost !== "" &&
                        NewRecentPost !== null
                          ? NewRecentPost.map((item, i) => {
                              return (
                                <div key={i}>
                                  {" "}
                                  <div className="single_post widgets_small">
                                    <div className="post_img">
                                      <div className="img_wrap">
                                        <img
                                          src={`http://localhost:3000/img/${item.img_video}`}
                                          alt={`http://localhost:3000/img/${item.img_video}`}
                                        />
                                      </div>
                                    </div>
                                    <div className="single_post_text">
                                      <div className="meta2">
                                        <a
                                          href={
                                            "/details/" +
                                            item.record_id +
                                            "/news_report"
                                          }
                                          alt=""
                                        >
                                          {item.article_date},{" "}
                                          {item.article_year}
                                        </a>
                                      </div>
                                      <h4>
                                        <a
                                          href={
                                            "/details/" +
                                            item.record_id +
                                            "/news_report"
                                          }
                                        >
                                          {item.title}
                                        </a>
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="space-15"></div>
                                  <div className="border_black"></div>
                                  <div className="space-15"></div>
                                </div>
                              );
                            })
                          : null}
                        {/*END REPEAT*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="space-60"></div>
        <div className="fourth_bg padding6030 recentPost">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h2>संबंधित पोस्ट</h2>
              </div>

              {RelatedPost !== undefined &&
              RelatedPost !== "" &&
              RelatedPost !== null
                ? RelatedPost.map((item, i) => {
                    return (
                      <div className="col-md-6 col-lg-4" key={i}>
                        <div className="single_post post_type3 mb30">
                          <div className="post_img">
                            <a href="/">
                              {item.type === 1 ? (
                                <img
                                  src={`http://localhost:3000/img/${item.img_video}`}
                                  alt={`http://localhost:3000/img/${item.img_video}`}
                                />
                              ) : null}
                            </a>
                          </div>
                          <div className="single_post_text">
                            <div className="dateRecent">
                              <a
                                href={
                                  "/details/" + item.record_id + "/related_post"
                                }
                              >
                                {item.article_date}, {item.article_year}
                              </a>
                            </div>
                            <h4>
                              <a
                                href={
                                  "/details/" + item.record_id + "/related_post"
                                }
                              >
                                {item.title}
                              </a>
                            </h4>
                            <div className="space-10"></div>
                            <p className="post-p">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
