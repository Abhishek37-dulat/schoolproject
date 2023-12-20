import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Blog1 from "../../images/blog1.jpg";
import Blog2 from "../../images/blog2.jpg";

const Footer = () => {
  return (
    <>
      <div>
        <div className="wrapper py-4" style={{ background: "#232323" }}>
          <div className="container">
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <h4 className="py-2" style={{ color: "#FFFFF1" }}>
                  Have a Questions?
                </h4>
                <div className="row py-4">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <IoLocationSharp size={20} style={{ color: "#FFFFF1" }} />
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <p>
                      <span style={{ color: "#FFFFF1" }}>
                        SCO – 25, 2nd Floor, Sector 20-D, Chandigarh, 160020
                      </span>
                    </p>{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <IoCall size={20} style={{ color: "#FFFFF1" }} />
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <p>
                      <span style={{ color: "#FFFFF1" }}>086994-38881</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <MdEmail size={20} style={{ color: "#FFFFF1" }} />
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <p>
                      <span style={{ color: "#FFFFF1" }}>
                        info@chemistrypassion.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <h4 className="py-2" style={{ color: "#FFFFF1" }}>
                  Recent Blog
                </h4>
                <div className="row py-4">
                  <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    <img
                      src={Blog1}
                      alt="blog1"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <span style={{ color: "#FFFFF1" }}>
                      Even the all-powerful Pointing has no control about
                    </span>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    <img
                      src={Blog2}
                      alt="blog2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <span style={{ color: "#FFFFF1" }}>
                      Even the all-powerful Pointing has no control about
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <h4 className="py-2" style={{ color: "#FFFFF1" }}>
                  Links
                </h4>
                <div className="row py-4">
                  <span style={{ color: "#FFFFF1" }}>
                    <FaLongArrowAltRight />
                    {"   "}
                    Home
                  </span>
                  <br />
                  <span style={{ color: "#FFFFF1" }}>
                    <FaLongArrowAltRight /> {"   "}
                    About
                  </span>
                  <br />
                  <span style={{ color: "#FFFFF1" }}>
                    <FaLongArrowAltRight /> {"   "}
                    Services
                  </span>
                  <br />
                  <span style={{ color: "#fff" }}>
                    <FaLongArrowAltRight /> {"   "}
                    Departments
                  </span>
                  <br />
                  <span style={{ color: "#FFFFF1" }}>
                    <FaLongArrowAltRight /> {"   "}
                    Contacts
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <h4 className="py-2" style={{ color: "#FFFFF1" }}>
                  Subscribe Us!
                </h4>
                <div className="row py-4">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <input
                      className="text-center"
                      type="text"
                      placeholder="Enter email address"
                      style={{
                        background: "#393939",
                        border: "1px solid #393939",
                        width: "250px",
                        height: "55px",
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <button
                      style={{
                        background: "#4B4AC1",
                        color: "#FFFFF1",
                        border: "1px solid #4B4AC1",
                        width: "250px",
                        height: "55px",
                        fontSize: "17px",
                        fontWeight: 500,
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4
                      className="py-2"
                      style={{ color: "#FFFFF1", marginTop: "10px" }}
                    >
                      Connect With Us
                    </h4>
                    <div className="d-flex">
                      <div
                        className="mx-1"
                        style={{
                          background: "#2E2E2E",
                          borderRadius: "100%",
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <FaTwitter
                          size={20}
                          style={{
                            color: "#FFFFF1",
                            marginLeft: "10px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="mx-1"
                        style={{
                          background: "#2E2E2E",
                          borderRadius: "100%",
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <FaFacebookF
                          size={20}
                          style={{
                            color: "#FFFFF1",
                            marginLeft: "10px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                      <div
                        className="mx-1"
                        style={{
                          background: "#2E2E2E",
                          borderRadius: "100%",
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <FaInstagram
                          size={20}
                          style={{
                            color: "#FFFFF1",
                            marginLeft: "10px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="text-center">
                <p style={{ color: "#FFFFF1" }}>
                  Copyright ©2023 All rights reserved | This template is made
                  with by Colorlib
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
