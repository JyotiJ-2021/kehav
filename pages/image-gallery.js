import React, { useState } from "react";

import Header from "../components/shared/header";
import Footer from "../components/shared/footers";
function ImageGallery(props) {
  const [ImageGalleryList] = useState(props.props.HomeList[8].Data);
  return (
    <div className="ksamvad " style={{ background: "#f2f3f5" }}>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {ImageGalleryList.map((item, i) => {
                return (
                  <div
                    className="responsiveimg"
                    style={{ padding: "20px" }}
                    key={i}
                  >
                    <div className="galleryimg">
                      <img
                        width="600"
                        height="400"
                        src={`img/${item.img_video}`}
                        alt={`img/${item.img_video}`}
                      />
                      <div
                        className="single_post_text"
                        style={{ marginTop: "5px" }}
                      >
                        {" "}
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

ImageGallery.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/");
  const json = await res.json();
  return { props: json };
};

export default ImageGallery;
