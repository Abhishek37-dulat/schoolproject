import React from "react";
import "./teacher.css";
import { CertifiedTeacherData } from "../../Data/CertifiedTeachers";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const CertifiedTeachers = () => {
  return (
    <>
      <div className="container-fluid py-4" style={{ background: "#FAFAFA" }}>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
                color: "#333333",
              }}
            >
              Certified Teachers
            </h1>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p
              className="text-center justify-content-center"
              style={{ fontSize: "18px", color: "#8E8E8E" }}
            >
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary <br /> regelialia. It is
              a paradisematic country
            </p>
          </div>
        </div>
        <div className="row">
          {CertifiedTeacherData.map((elem, id) => {
            return (
              <>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 py-2 d-flex align-items-center justify-content-center"
                  key={id}
                >
                  <div className="card  mycards">
                    <img
                      src={elem.image}
                      alt="teachersday"
                      className="zoom-image"
                    />
                    <div className="social-icon">
                      <FaFacebookF size={20} style={{ color: "#FE0000" }} />
                      {"  "}
                      <FaInstagram size={20} style={{ color: "#FE0000" }} />
                      {"  "}
                      <FaTwitter size={20} style={{ color: "#FE0000" }} />
                      {"  "}
                    </div>
                    <p className="text-center teachername">{elem.name}</p>
                    <p className="text-center teacher-type">{elem.type}</p>
                    <p className="text-center teacher-text">{elem.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CertifiedTeachers;
