import React, { useState } from "react";
import Header from "../components/shared/header";
import Footer from "../components/shared/footers";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function ContactUs() {
  const [IsSuccess, setIsSuccess] = useState();
  const [IsError, setIsError] = useState();
  const [error, setError] = useState();
  const initialValues = {
    name: "",
    email_id: "",
    subject: "",
    message: "",
    contact_number: "",
  };
  const ConnectSchema = Yup.object().shape({
    name: Yup.string().required("*"),
    email_id: Yup.string().required("*").email("Invalid email"),
    subject: Yup.string().required("*"),
    message: Yup.string().required("*"),
    contact_number: Yup.string()
      .required("*")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "*")
      .min(10, "*"),
  });

  const AddContactInformation = async (values) => {
    //  console.log(values);
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
      }),
    });
    const res = await response.json();
    //console.log(res);
    if (res.Success === true) {
      setIsSuccess(
        "Thank you for contacting us, we will get back to you soon."
      );
    } else {
      setIsError("Error! please contact with adminstrator");
    }
  };
  return (
    <div>
      <Header />

      {/*Breadcrumb*/}
      <div className="inner_table">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bridcrumb">
                {" "}
                <a href="/">Home</a> / Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Breadcrumb*/}

      <div className="archives padding-top-0 productListing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="businerss_news padding20 white_bg border-radious5">
                <div className="row">
                  <div className="col-12">
                    <div className="contentPage">
                      <h1>Contact Us</h1>

                      <div className="contacts">
                        <div className="container">
                          <div className="row">
                            <div className="cotact_form">
                              <div className="row justify-content-center">
                                <div className="col-lg-4">
                                  <div className="box single_contact_box ctboxs">
                                    <div className="contact_title">
                                      <h3>Address</h3>
                                    </div>
                                    <div className="contact_details">
                                      <div className="contact_details_icon">
                                        {" "}
                                        <i className="fas fa-map-marker-alt"></i>
                                      </div>
                                      <h6>Laxmi Narain Street, Paharganj</h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-8 contactForm">
                                  <h3 align="center">हमसे संपर्क करें</h3>
                                  <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValues}
                                    validationSchema={ConnectSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                      AddContactInformation(values);
                                      setSubmitting(false);
                                    }}
                                  >
                                    {({
                                      values,
                                      handleChange,
                                      errors,
                                      touched,
                                      handleSubmit,
                                      isSubmitting,
                                    }) => (
                                      <form onSubmit={handleSubmit}>
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <input
                                              type="text"
                                              placeholder="Your Full Name/आपका पूरा नाम"
                                              name="name"
                                              id="name"
                                              value={values.name}
                                              onChange={handleChange}
                                              className={
                                                touched.name && errors.name
                                                  ? "errorr"
                                                  : null
                                              }
                                              onFocus={() => {
                                                setError("");
                                              }}
                                            />
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              type="number"
                                              placeholder="Your Contact/आपका संपर्क "
                                              name="contact_number"
                                              id="contact_number"
                                              value={values.contact_number}
                                              onChange={handleChange}
                                              className={
                                                touched.contact_number &&
                                                errors.contact_number
                                                  ? "errorr"
                                                  : null
                                              }
                                              onFocus={() => {
                                                setError("");
                                              }}
                                            />
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              type="email"
                                              placeholder="Your E-mail/आपका  ईमेल"
                                              name="email_id"
                                              id="email_id"
                                              value={values.email_id}
                                              onChange={handleChange}
                                              className={
                                                touched.email_id &&
                                                errors.email_id
                                                  ? "errorr"
                                                  : null
                                              }
                                              onFocus={() => {
                                                setError("");
                                              }}
                                            />
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              type="text"
                                              placeholder="Your Subject/आपका विषय"
                                              name="subject"
                                              id="subject"
                                              value={values.subject}
                                              onChange={handleChange}
                                              className={
                                                touched.subject &&
                                                errors.subject
                                                  ? "errorr"
                                                  : null
                                              }
                                              onFocus={() => {
                                                setError("");
                                              }}
                                            />
                                          </div>

                                          <div className="col-12">
                                            <textarea
                                              cols="30"
                                              rows="5"
                                              placeholder="Your Message/आपका संदेश"
                                              name="message"
                                              id="message"
                                              value={values.message}
                                              onChange={handleChange}
                                              className={
                                                touched.message &&
                                                errors.message
                                                  ? "errorr"
                                                  : null
                                              }
                                              onFocus={() => {
                                                setError("");
                                              }}
                                            />
                                          </div>
                                          <div className="col-12">
                                            <div className="space-20"></div>

                                            <button
                                              className="cbtn1"
                                              type="submit"
                                              style={{ borderRadius: "5px" }}
                                            >
                                              SEND/भेजें
                                            </button>
                                            <p> {IsSuccess}</p>
                                          </div>
                                        </div>
                                      </form>
                                    )}
                                  </Formik>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
  );
}

export default ContactUs;
