import React from "react";

function Header() {
  var today = new Date();
  var daylist = [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार",
  ];
  const monthlist = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितम्बर",
    "अक्टूबर",
    "नवम्बर",
    "दिसम्बर",
  ];
  return (
    <div>
      {" "}
      <div>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-8 align-self-center">
                <div className="trancarousel_area">
                  <p>
                    {daylist[today.getDay()] + ","}&nbsp;&nbsp;
                    {today.getDate()}&nbsp;
                    {monthlist[today.getMonth()]}&nbsp;
                    {today.getFullYear()}
                  </p>
                </div>
              </div>
              <div className="col-md-4 align-self-center">
                <div className="top_date_social text-right">
                  <div className="social1">
                    <ul className="inline">
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
                        <a href="/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo_area headerArea">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 align-self-center">
                <div className="logo">
                  <a href="/">
                    <img src="/img/logo.png" alt="" />
                  </a>
                </div>
              </div>

              <div className="hdImgCenter">
                <img src="/img/hd-center.jpg" alt="" />
              </div>

              <div className="hdImgright">
                <img src="/img/prerna-logo.jpg" alt="" />
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className="main-menu">
            <div className="main-nav clearfix is-ts-sticky">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-12 align-self-center">
                    <div className="newsprk_nav stellarnav">
                      <ul id="newsprk_menu">
                        <li>
                          <a href="/">मुख पृष्ठ</a>
                        </li>
                        <li>
                          <a href="/">राष्ट्र</a>
                        </li>
                        <li>
                          <a href="/">विश्व</a>
                        </li>
                        <li>
                          <a href="/">सोशल मीडिया</a>
                        </li>
                        <li>
                          <a href="/">विभिन्न आयाम</a>
                        </li>
                        <li>
                          <a href="/">साक्षात्कार</a>
                        </li>
                        <li>
                          <a href="/">विविध</a>
                        </li>
                        <li>
                          <a href="/">पुराने अंक</a>
                        </li>
                        <li>
                          <a href="/contact">संपर्क</a>
                        </li>
                      </ul>
                    </div>
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

export default Header;
