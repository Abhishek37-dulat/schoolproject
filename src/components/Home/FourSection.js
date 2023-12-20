import React from "react";
import "./foursection.css";
import { FaBookReader } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

const FourSection = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div style={{ background: "#FE0000" }}>
              <div style={{ padding: "40px 40px" }}>
                <SiBookstack
                  className="d-flex align-items-center justify-content-center"
                  size={36}
                  style={{
                    color: "#fff",
                    margin: "auto",
                  }}
                />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontSize: "22px", fontWeight: 600 }}
                >
                  Vision
                </p>
                <span
                  className="text-center"
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="" style={{ background: "#0D1128" }}>
              <div style={{ padding: "40px 40px" }}>
                <FaBookReader
                  className="d-flex align-items-center justify-content-center"
                  size={36}
                  style={{ color: "#fff", margin: "auto" }}
                />

                <p
                  className="text-center"
                  style={{ color: "#fff", fontSize: "22px", fontWeight: 600 }}
                >
                  Mission
                </p>
                <span className="text-center" style={{ color: "#fff" }}>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="" style={{ background: "#FE0000" }}>
              <div style={{ padding: "40px 40px" }}>
                <SiBookstack
                  className="d-flex align-items-center justify-content-center"
                  size={36}
                  style={{ color: "#fff", margin: "auto" }}
                />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontSize: "22px", fontWeight: 600 }}
                >
                  Commitment
                </p>
                <span className="text-center" style={{ color: "#fff" }}>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="" style={{ background: "#0D1128" }}>
              <div style={{ padding: "40px 40px" }}>
                <FaBookReader
                  className="d-flex align-items-center justify-content-center"
                  size={36}
                  style={{ color: "#fff", margin: "auto" }}
                />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontSize: "22px", fontWeight: 600 }}
                >
                  Sport Clubs
                </p>
                <span className="text-center" style={{ color: "#fff" }}>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourSection;
