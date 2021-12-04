import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useRouter } from "next/router";
import ReadMoreReact from "read-more-react";
function Listing(props) {
  const Router = useRouter();
  console.log(props);
  const breadcrumb = Router.query.type;
  const data = props.listing[0].Data;
  const [ListingNewReport] = useState(props.listing[1].Data);
  const [ListingSpecialReport] = useState(props.listing[0].Data);
  const [Offset, setOffSet] = useState(0);
  const [PerPage, setPerPage] = useState(3);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PageCount, setPageCount] = useState(Math.ceil(data.length / PerPage));
  // const [PostData, setPostData] = useState();
  // const handlePageClick = handlePageClick.bind(this);

  // console.log(data);
  const slice = data.slice(Offset, Offset + PerPage);
  //  console.log(slice);

  const postData = slice.map((item, i) => (
    <React.Fragment>
      <div className="single_post post_type3 post_type12 mb30" key={i}>
        <div className="post_img">
          <div className="img_wrap">
            <a href={"/details/" + item.record_id + "/listing_page"}>
              {" "}
              {item.type === 1 ? (
                <img
                  width="330px"
                  height="236px"
                  src={`http://localhost:3000/img/${item.img_video}`}
                  alt={`http://localhost:3000/img/${item.img_video}`}
                />
              ) : null}
            </a>
          </div>
        </div>
        <div className="single_post_text">
          <div className="meta3 ldate">
            <a href={"/details/" + item.record_id + "/listing_page"}>
              {item.article_date}, {item.article_year}
            </a>
          </div>
          <h4>
            <a href={"/details/" + item.record_id + "/listing_page"}>
              {item.title}
            </a>
          </h4>
          <div className="space-10"></div>
          <p className="post-p">
            {" "}
            <ReadMoreReact
              text={!item.description ? null : item.description}
              min={50}
              ideal={100}
              max={250}
              readMoreText={""}
            />
            <div className="space-20"></div>
            <a
              href={"/details/" + item.record_id + "/listing_page"}
              className="readmore"
            >
              आगे पढ़ें <i className="fa fa-arrow-right"></i>
            </a>
          </p>{" "}
        </div>
      </div>
    </React.Fragment>
  ));

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * PerPage;
    setCurrentPage(selectedPage);
    setOffSet(offset);
  };
  return (
    <div>
      <div className="inner_table">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bridcrumb">
                {" "}
                <a href="/">Home</a> /{breadcrumb}
                {/* विशेष रिपोर्ट */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Bridcrumb*/}
      <div className="archives padding-top-0 productListing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 plist">
              <div className="businerss_news padding20 white_bg border-radious5 shadow6">
                <div className="row">
                  <div className="col-12 align-self-center">
                    <div className="categories_title">
                      <h5>
                        Category: <a href="/">विशेष रिपोर्ट</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12"
                    // style={{ minHeight: "900px", maxHeight: "900px" }}
                  >
                    {ListingSpecialReport !== undefined &&
                    ListingSpecialReport !== "" &&
                    ListingSpecialReport !== null
                      ? postData
                      : null}
                  </div>

                  <div className="col-12">
                    <div className="cpagination padding1010">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination paginationSection">
                          <ReactPaginate
                            previousLabel={
                              <span aria-hidden="true">
                                <i className="fas fa-caret-left"></i>
                              </span>
                            }
                            nextLabel={
                              <span aria-hidden="true">
                                <i className="fas fa-caret-right"></i>
                              </span>
                            }
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={PageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            active={true}
                            onPageActive={true}
                            subContainerClassName={"pages pagination"}
                            activeClassName="pgnbtnactive"
                            disableInitialCallback={true}
                          />
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 sidebarComman plist">
              <a href="/javascript" className="listmenu">
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
                      <a href="/video-gallery">
                        {" "}
                        <span>वीडियो गैलरी</span>
                      </a>
                    </li>
                    <li>
                      <a href="/image-gallery">
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
                    {ListingNewReport !== undefined &&
                    ListingNewReport !== "" &&
                    ListingNewReport !== null
                      ? ListingNewReport.map((item, i) => {
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
                                    >
                                      {item.article_date}, {item.article_year}
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
    </div>
  );
}

export default Listing;
