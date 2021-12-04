import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <div>
        <div className="footer footer_area3 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single_footer3">
                  <div className="space-40"></div>
                  <div className="copyright_menu inline text-center footerlinks">
                    <ul className="pl-0">
                      <li>
                        <a href="/">मुख पृष्ठ</a>
                      </li>
                      <li>
                        <a href="/">साक्षात्कार</a>
                      </li>
                      <li>
                        <a href="/">विविध</a>
                      </li>
                      <li>
                        <a href="/">सोशल मीडिया</a>
                      </li>
                      <li>
                        <a href="/">लेख</a>
                      </li>
                      <li>
                        <a href="/">विचार</a>
                      </li>
                      <li>
                        <a href="/contact">संपर्क</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ftSocial">
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
                      <a href="javascript">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p className="text-center">
                    Copyright &copy; KeshavSamvad. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
