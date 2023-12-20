import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import ChemLogo from "../../images/chem-logo.png";

const TopNavbar = () => {
  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div style={{ width: "110px" }}>
              <img src={ChemLogo} alt="chem logos" style={{ width: "110px" }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-2">
                <FaPaperPlane
                  size={20}
                  style={{ color: "#FE0000", marginTop: "10px" }}
                />
              </div>
              <div className="col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <b>Email</b>
                </span>{" "}
                <br />
                <span style={{ fontSize: "14px", color: "#8E8E8E" }}>
                  youremail@email.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-2">
                <IoMdCall
                  size={20}
                  style={{ color: "#FE0000", marginTop: "10px" }}
                />
              </div>
              <div className="col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <b>Call</b>
                </span>{" "}
                <br />
                <span style={{ fontSize: "14px", color: "#8E8E8E" }}>
                  Call Us: + 1235 2355 98
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-end">
            <button
              style={{
                background: "#FE0000",
                color: "#FAFAFA",
                border: "1px solid #FD5F00",
                width: "110px",
                height: "40px",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
