import React, { useState } from "react";
import ReactPlayer from "react-player";
import Header from "../components/shared/header";
import Footer from "../components/shared/footers";

function VideoGallery(props) {
  const [VideoGalleryList] = useState(props.props.HomeList[7].Data);
  return (
    <div>
      <div className="ksamvad grayBg">
        <Header />

        <div className="row">
          <div className="col-12">
            {VideoGalleryList.map((item, i) => {
              return (
                <div
                  className="responsiveimg"
                  style={{
                    padding: "10px",
                    marginRight: "0px",
                    marginTop: "10px",
                  }}
                  key={i}
                >
                  <div className="galleryvideo">
                    <ReactPlayer
                      target="_parent"
                      style={{ borderRadius: "10px", padding: "8px" }}
                      width="320px"
                      height="240px"
                      padding="10px"
                      url={`https://www.youtube.com/watch?v=${item.img_video}`}
                    />{" "}
                    <div
                      className="single_post_text"
                      style={{ marginTop: "5px", marginLeft: "10px" }}
                    >
                      {" "}
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

VideoGallery.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/");
  const json = await res.json();
  return { props: json };
};

export default VideoGallery;
