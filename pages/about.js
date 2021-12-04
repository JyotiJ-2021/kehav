import React, { useState } from "react";

import Header from "../components/shared/header";
import Footer from "../components/shared/footers";
export default function About(props) {
  console.log(props.props.data.About.Data[0]);
  const [About] = useState(props.props.data.About.Data[0]);
  return (
    <div>
      <div className="ksamvad grayBg">
        <Header />
        {/*Bridcrumb*/}
        <div className="inner_table">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bridcrumb">
                  {" "}
                  <a href="/">Home</a> / About Us
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Bridcrumb*/}

        <div className="archives padding-top-0 productListing">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="businerss_news padding20 white_bg border-radious5">
                  <div className="row">
                    <div className="col-12">
                      <div className="contentPage">
                        <h1>About Us</h1>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: About.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

About.getInitialProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/about`);
  const data = await res.json();
  return {
    props: { data },
  };
};
