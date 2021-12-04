import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import ReactPlayer from "react-player";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMoreReact from "read-more-react";

function HomeLayout(props) {
  let List = props.data.HomeList;
  const [InterviewDescription] = useState(List[0].Data);
  const [HonorableDetailsList] = useState(List[1].Data);
  const [HonorableSliderList] = useState(List[2].Data);
  const [SpecialReportList] = useState(List[3].Data);
  const [SpecialEdition1List] = useState(List[4].Data);
  const [SpecialEdition2List] = useState(List[5].Data);
  const [VideoGalleryList] = useState(List[6].Data);
  const [VideoGalleryList1] = useState(List[7].Data);
  const [ImageGalleryList] = useState(List[8].Data);
  const [VideoUrl, setVideoUrl] = useState("W0PimMDEAz0");
  const [Title, setTitle] = useState(
    `केंद्र सरकार के कृषि सेस संबंधी फैसले पर छत्तीसगढ़ में सियासत गरमा गई है। सत्तापक्ष और विपक्ष के बीच वार-पलटवार का दौर शुरू हो गया है। मुख्यमंत्री भूपेश बघेल द्वारा मंगलवार को केंद्रीय...`
  );
  const [isLoading, setisLoading] = useState(0);
  const [Record_id, setRecord_id] = useState(1);

  const myRef = useRef(null);
  const honarableCarouselRef = useRef(null);
  const honarableRef = useRef(null);
  const specialRef = useRef(null);
  const videoGalleryRef = useRef(null);
  const imageGalleryRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const openVideo = (url, type, title, id) => {
    setVideoUrl(type === 2 ? url : null);
    setTitle(title);
    setRecord_id(id);
  };

  return (
    <div>
      <div className="ksamvad grayBg">
        <div className="post_gallary_area grayBg mb40 padding-top-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                {/*Slider*/}
                <div className="mb30 homeSlider">
                  <div
                    className="slickprevinterbtn"
                    onClick={() => {
                      myRef.current.slickPrev();
                    }}
                  >
                    <i
                      className="fal fa-angle-left "
                      style={{ marginTop: "10px" }}
                    ></i>
                  </div>

                  <Slider
                    {...settings1}
                    ref={(slider) => (myRef.current = slider)}
                  >
                    {InterviewDescription !== undefined &&
                    InterviewDescription !== null &&
                    InterviewDescription !== ""
                      ? InterviewDescription.map((item, i) => {
                          return (
                            <div
                              className="single_post gradient1 post_type6 border-radious7 xs-mb30"
                              key={i}
                            >
                              <div className="post_img gradient1">
                                <div className="img_wrap">
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/interview_description"
                                    }
                                  >
                                    {item.type === 1 ? (
                                      <img
                                        src={`img/${item.img_video}`}
                                        alt={`img/${item.img_video}`}
                                      />
                                    ) : null}
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <h4>
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/interview_description"
                                    }
                                  >
                                    {item.heading}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </Slider>
                  <div
                    className="slicknextinterbtn"
                    onClick={() => {
                      myRef.current.slickNext();
                    }}
                  >
                    <i className="fal fa-angle-right"></i>
                  </div>
                </div>
                {/*End Slider*/}
              </div>

              <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <div className="white_bg padding15 border-radious5 sm-mt30">
                  {HonorableDetailsList !== undefined &&
                  HonorableDetailsList !== null &&
                  HonorableDetailsList !== ""
                    ? HonorableDetailsList.map((item, i) => {
                        return (
                          <div
                            className="single_post type14 widgets_small"
                            key={i}
                          >
                            <div className="post_img">
                              <div className="img_wrap">
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/detail_list"
                                  }
                                >
                                  {" "}
                                  {item.type === 1 ? (
                                    <img
                                      src={`img/${item.img_video}`}
                                      alt={`img/${item.img_video}`}
                                    />
                                  ) : null}
                                </a>
                              </div>
                            </div>
                            <div className="single_post_text">
                              <h4>
                                {" "}
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/detail_list"
                                  }
                                >
                                  {item.title}
                                </a>
                              </h4>
                              <div className="meta4">
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/detail_list"
                                  }
                                >
                                  ....पूरा पढ़े
                                </a>
                              </div>
                              <div className="space-5"></div>
                              <div className="border_black"></div>
                              <div className="space-15"></div>
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
        <div> </div>
        {/* माननीय सरसंघचालक गैलरी */}
        <div className="feature3 homeSlideMobile mb30">
          <div className="container">
            <div className="row">
              <div className="col-12 bxWithSlider pb-4">
                <div
                  className="heading mb20 bxSliderHead"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="widget-title margin0">माननीय सरसंघचालक</h3>
                  <div style={{ display: "flex", marginLeft: "50px" }}>
                    <div
                      className="slickprevbtn"
                      onClick={() => {
                        honarableCarouselRef.current.slickPrev();
                      }}
                    >
                      <i className="fal fa-angle-left fal-fa-angle"></i>
                    </div>
                    <div
                      className="slicknextbtn"
                      onClick={() => {
                        honarableCarouselRef.current.slickNext();
                      }}
                    >
                      <i className="fal fa-angle-right fal-fa-angle"></i>
                    </div>
                  </div>
                </div>
                <div class="feature3_carousel  nav_style1 specialReport">
                  <Slider
                    className="specialReport"
                    {...settings}
                    ref={(slider) => (honarableCarouselRef.current = slider)}
                  >
                    {HonorableSliderList !== undefined &&
                    HonorableSliderList !== null &&
                    HonorableSliderList !== ""
                      ? HonorableSliderList.map((item, i) => {
                          return item.type === 1 ? (
                            <div
                              className="single_post type19 border-radious5 "
                              key={i}
                            >
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/honorable_detail"
                                    }
                                  >
                                    {item.type === 1 ? (
                                      <img
                                        src={`img/${item.img_video}`}
                                        alt={`img/${item.img_video}`}
                                      />
                                    ) : null}
                                  </a>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })
                      : null}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* समाप्त माननीय सरसंघचालक गैलरी */}
        {/*माननीय */}
        <div className="feature3 homeSlideMobile mb30">
          <div className="container">
            <div className="row">
              <div className="col-12 bxWithSlider">
                <div
                  className="heading mb20 bxSliderHead"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="widget-title margin0">माननीय</h3>
                  <a
                    href="/listing/honorable_video"
                    alt=""
                    className="bxSliderViewAll"
                  >
                    {" "}
                    सभी देखें
                  </a>
                  <div style={{ display: "flex" }}>
                    <div
                      className="slickprevbtn"
                      onClick={() => {
                        honarableRef.current.slickPrev();
                      }}
                    >
                      <i className="fal fa-angle-left fal-fa-angle"></i>
                    </div>
                    <div
                      className="slicknextbtn"
                      onClick={() => {
                        honarableRef.current.slickNext();
                      }}
                    >
                      <i className="fal fa-angle-right fal-fa-angle"></i>
                    </div>
                  </div>
                </div>
                <div className="feature3_carousel owl-carousel nav_style1"></div>{" "}
                <Slider
                  className=" specialReport mb40"
                  {...settings}
                  ref={(slider) => (honarableRef.current = slider)}
                >
                  {HonorableSliderList !== undefined &&
                  HonorableSliderList !== null &&
                  HonorableSliderList !== ""
                    ? HonorableSliderList.map((item, i) => {
                        return item.type === 2 ? (
                          <div
                            className="single_post type19 border-radious5 white_bg"
                            key={i}
                          >
                            {" "}
                            <div className="post_img">
                              <div className="img_wrap">
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/honorable_video"
                                  }
                                >
                                  {item.type === 2 ? (
                                    <ReactPlayer
                                      style={{ borderRadius: "10px" }}
                                      width="350px"
                                      height="240px"
                                      url={`https://www.youtube.com/watch?v=${item.img_video}`}
                                    />
                                  ) : (
                                    <img
                                      src={`img/${item.img_video}`}
                                      alt={`img/${item.img_video}`}
                                    />
                                  )}
                                </a>
                              </div>
                            </div>
                            <div className="single_post_text padding2020">
                              <a
                                href={
                                  "/details/" +
                                  item.record_id +
                                  "/honorable_video"
                                }
                              >
                                {" "}
                                {item.type === 2 ? item.heading : item.heading}
                              </a>{" "}
                            </div>
                          </div>
                        ) : null;
                      })
                    : null}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* समाप्त माननीय */}
        {/* विशेष रिपोर्ट */}
        <div className="feature3 homeSlideMobile mb30">
          <div className="container">
            <div className="row">
              <div className="col-12 bxWithSlider">
                <div
                  className="heading mb20 bxSliderHead"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="widget-title margin0">विशेष रिपोर्ट</h3>
                  <a
                    href="/listing/special_report"
                    alt=""
                    className="bxSliderViewAll"
                  >
                    {" "}
                    सभी देखें
                  </a>
                  <div style={{ display: "flex" }}>
                    <div
                      className="slickprevbtn"
                      onClick={() => {
                        specialRef.current.slickPrev();
                      }}
                    >
                      <i className="fal fa-angle-left fal-fa-angle"></i>
                    </div>
                    <div
                      className="slicknextbtn"
                      onClick={() => {
                        specialRef.current.slickNext();
                      }}
                    >
                      <i className="fal fa-angle-right fal-fa-angle"></i>
                    </div>
                  </div>
                </div>
                <Slider
                  className="specialReport"
                  {...settings}
                  ref={(slider) => (specialRef.current = slider)}
                >
                  {SpecialReportList !== undefined &&
                  SpecialReportList !== null &&
                  SpecialReportList !== ""
                    ? SpecialReportList.map((item, i) => {
                        return (
                          <div
                            className="single_post type19 border-radious5 white_bg"
                            key={i}
                          >
                            <div className="post_img">
                              <div className="img_wrap">
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/special_report"
                                  }
                                >
                                  {item.type === 1 ? (
                                    <img
                                      className="play_btn"
                                      src={`img/${item.img_video}`}
                                      alt={`img/${item.img_video}`}
                                    />
                                  ) : null}
                                </a>
                              </div>
                            </div>
                            <div className="single_post_text">
                              <h4>{item.title}</h4>
                              <p
                                className="post-p"
                                style={{ marginRight: "10px" }}
                              >
                                <ReactReadMoreReadLess
                                  charLimit={200}
                                  readMoreText={""}
                                  //readLessText={"Read less ▲"}
                                  readMoreClassName="read-more-less--more"
                                  // readLessClassName="read-more-less--less"
                                >
                                  {item.description}
                                </ReactReadMoreReadLess>
                                <div className="space-20"></div>
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/special_report"
                                  }
                                  alt=""
                                  //  className="readmore"
                                  className="cbtn2"
                                >
                                  आगे पढ़ें
                                </a>
                              </p>{" "}
                            </div>
                          </div>
                        );
                      })
                    : null}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* समाप्त विशेष रिपोर्ट */}

        {/*Three Box*/}
        <div className="homeThreeBox mb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 pl-0 homeThreeBoxInner">
                <div className="sanskaranOne">
                  <div className="heading bxSliderHead">
                    <h3>विशेष संस्करण 1</h3>
                    <a
                      alt=""
                      className="bxSliderViewAll"
                      href={"/listing/special_edition1"}
                    >
                      और पढ़ें
                    </a>
                  </div>
                  <div className="sanskaranOneText">
                    {SpecialEdition1List !== undefined &&
                    SpecialEdition1List !== null &&
                    SpecialEdition1List !== ""
                      ? SpecialEdition1List.map((item, i) => {
                          return (
                            <div
                              className="single_post widgets_small mb15"
                              key={i}
                            >
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/special_edition1"
                                    }
                                  >
                                    {item.type === 1 ? (
                                      <img
                                        src={`img/${item.img_video}`}
                                        alt={`img/${item.img_video}`}
                                      />
                                    ) : null}
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <h4>
                                  {" "}
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/special_edition1"
                                    }
                                  >
                                    {item.title}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 homeThreeBoxInner">
                <div className="sanskaranOne">
                  <div className="heading bxSliderHead">
                    <h3>विशेष संस्करण 2</h3>
                    <a
                      alt=""
                      className="bxSliderViewAll"
                      href={"/listing/special_edition2"}
                    >
                      और पढ़ें
                    </a>
                  </div>
                  <div className="sanskaranOneText">
                    {SpecialEdition2List !== undefined &&
                    SpecialEdition2List !== null &&
                    SpecialEdition2List !== ""
                      ? SpecialEdition2List.map((item, i) => {
                          return (
                            <div
                              className="single_post widgets_small mb15"
                              key={i}
                            >
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/special_edition2"
                                    }
                                  >
                                    {item.type === 1 ? (
                                      <img
                                        src={`img/${item.img_video}`}
                                        alt={`img/${item.img_video}`}
                                      />
                                    ) : null}
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <h4>
                                  {" "}
                                  <a
                                    href={
                                      "/details/" +
                                      item.record_id +
                                      "/special_edition2"
                                    }
                                  >
                                    {item.title}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 pr-0 homeThreeBoxInner">
                <div className="sanskaranOne">
                  <div className="heading bxSliderHead">
                    <h3>e संस्करण</h3>
                  </div>
                  <div className="sanskaranOneText">
                    <h5 className="text-center mt-5">ऑनलाइन ग्राहक बने </h5>
                    <img src="img/ebook.jpg" className="eBook" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Three Box*/}

        {/*Video Gallery*/}
        <div className="videoGallery homeSlideMobile mb30">
          <div className="container">
            <div className="videoGalleryInner">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading mb20 bxSliderHead">
                    <h3 className="widget-title margin0">वीडियो गैलरी</h3>
                  </div>
                </div>
              </div>

              <div className="row vgInner">
                <div className="col-xl-8">
                  <div className="single_post post_type3 post_type11 post_type21 xs-mb30">
                    <div className="post_img border-radious7">
                      <div className="img_wrap">
                        <iframe
                          className="play_btn vghsm"
                          style={{ borderRadius: "10px" }}
                          src={"https://www.youtube.com/embed/" + VideoUrl}
                        ></iframe>
                      </div>
                      {/*} <a href="/" className="youtube_middle">
                        <i className="far fa-play-circle"></i>
                          </a>{" "}*/}
                    </div>
                    <div className="single_post_text">
                      <h4>
                        {" "}
                        <a href={"/details/" + Record_id + "/video_gallery"}>
                          {Title}
                        </a>
                      </h4>
                      <div className="space-10"></div>
                    </div>
                  </div>
                  <div className="space-lg-30"></div>
                </div>
                <div className="col-md-6 col-xl-4 vGalleryRight recent-postsc">
                  {VideoGalleryList !== undefined &&
                  VideoGalleryList !== null &&
                  VideoGalleryList !== ""
                    ? VideoGalleryList.map((item, i) => {
                        return (
                          <div
                            className="single_post type14 type22 widgets_small sm-mt30"
                            key={i}
                          >
                            <div className="post_img">
                              <div className="img_wrap">
                                <div className="img_wrap">
                                  {item.type === 2 ? (
                                    <iframe
                                      width="100px"
                                      height="59px"
                                      style={{ borderRadius: "10px" }}
                                      src={
                                        "https://www.youtube.com/embed/" +
                                        item.img_video
                                      }
                                    ></iframe>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div
                              className="single_post_text"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                openVideo(
                                  item.img_video,
                                  item.type,
                                  item.title,
                                  item.record_id
                                );
                              }}
                            >
                              {" "}
                              <h4>
                                {" "}
                                <a
                                  href={
                                    "/details/" +
                                    item.record_id +
                                    "/video_gallery"
                                  }
                                >
                                  {item.title}{" "}
                                </a>
                              </h4>
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

        {/*End Video Gallery*/}

        {/* वीडियो गैलरी */}
        <div className="feature3 homeSlideMobile mb30">
          <div className="container">
            <div className="row">
              <div className="col-12 bxWithSlider">
                <div
                  className="heading mb20 bxSliderHead"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="widget-title margin0">वीडियो गैलरी</h3>
                  <a href={"/video-gallery"} alt="" className="bxSliderViewAll">
                    सभी देखें
                  </a>{" "}
                  <div style={{ display: "flex" }}>
                    <div
                      className="slickprevbtn"
                      onClick={() => {
                        videoGalleryRef.current.slickPrev();
                      }}
                    >
                      <i className="fal fa-angle-left fal-fa-angle"></i>
                    </div>
                    <div
                      className="slicknextbtn"
                      onClick={() => {
                        videoGalleryRef.current.slickNext();
                      }}
                    >
                      <i className="fal fa-angle-right fal-fa-angle"></i>
                    </div>
                  </div>
                </div>
                <Slider
                  className="specialReport"
                  {...settings}
                  ref={(slider) => (videoGalleryRef.current = slider)}
                >
                  {VideoGalleryList1 !== undefined &&
                  VideoGalleryList1 !== null &&
                  VideoGalleryList1 !== ""
                    ? VideoGalleryList1.map((item, i) => {
                        return (
                          <div
                            className="single_post type19 border-radious5 "
                            key={i}
                          >
                            <div className="post_img">
                              <div className="img_wrap">
                                <a
                                  href={
                                    "/details/" + Record_id + "/video_gallery1"
                                  }
                                >
                                  {item.type === 2 ? (
                                    <iframe
                                      style={{ borderRadius: "10px" }}
                                      width="450px"
                                      height="240px"
                                      src={
                                        "https://www.youtube.com/embed/" +
                                        item.img_video
                                      }
                                    ></iframe>
                                  ) : (
                                    ""
                                  )}
                                </a>
                              </div>
                            </div>
                            <div
                              className="single_post_text"
                              //  style={{ marginRight: "5px" }}
                            >
                              <h4>
                                {" "}
                                <a
                                  href={
                                    "/details/" + Record_id + "/video_gallery1"
                                  }
                                >
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* समाप्त वीडियो गैलरी */}

        {/* छवि गैलरी */}
        <div className="feature3 homeSlideMobile mb30">
          <div className="container">
            <div className="row">
              <div className="col-12 bxWithSlider">
                <div
                  className="heading mb20 bxSliderHead"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="widget-title margin0">छवि गैलरी</h3>
                  <a href="/image-gallery" className="bxSliderViewAll">
                    सभी देखें
                  </a>{" "}
                  <div style={{ display: "flex" }}>
                    <div
                      className="slickprevbtn"
                      onClick={() => {
                        imageGalleryRef.current.slickPrev();
                      }}
                    >
                      <i className="fal fa-angle-left fal-fa-angle"></i>
                    </div>
                    <div
                      className="slicknextbtn"
                      onClick={() => {
                        imageGalleryRef.current.slickNext();
                      }}
                    >
                      <i className="fal fa-angle-right fal-fa-angle"></i>
                    </div>
                  </div>
                </div>

                <Slider
                  className="specialReport mb30"
                  {...settings}
                  ref={(slider) => (imageGalleryRef.current = slider)}
                >
                  {ImageGalleryList !== undefined &&
                  ImageGalleryList !== null &&
                  ImageGalleryList !== ""
                    ? ImageGalleryList.map((item, i) => {
                        return (
                          <div
                            className="single_post type19 border-radious5"
                            key={i}
                          >
                            <div className="post_img">
                              <div className="img_wrap">
                                <a
                                  href={
                                    "/details/" + Record_id + "/image_gallery"
                                  }
                                >
                                  {item.type === 1 ? (
                                    <img
                                      src={`img/${item.img_video}`}
                                      alt={`img/${item.img_video}`}
                                    />
                                  ) : null}
                                </a>
                              </div>
                            </div>
                            <div className="single_post_text">
                              <h4>
                                {" "}
                                <a
                                  href={
                                    "/details/" + Record_id + "/image_gallery"
                                  }
                                >
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* समाप्त छवि गैलरी */}
      </div>
    </div>
  );
}

export default HomeLayout;
