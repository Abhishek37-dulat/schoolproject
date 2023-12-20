import React from "react";
import About from "../../images/about.jpg";
import "./ourcourses.css";
import { OfferData } from "../../Data/OfferData";

const WeOffer = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <h1 className="py-4" style={{ color: "#333333" }}>
            What We Offer
          </h1>
          <p className="py-4" style={{ color: "#8E8E8E", fontSize: "18px" }}>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            word.
          </p>
          <div className="row">
            {OfferData.map((elem, id) => {
              return (
                <>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row py-2">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div
                          style={{
                            background: "#FE0000",
                            borderRadius: "100%",
                            height: "80px",
                            width: "80px",
                          }}
                        >
                          {elem.icon}
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: "#333333",
                          }}
                        >
                          {elem.title}
                        </p>
                        <p style={{ color: "#8E8E8E", fontSize: "18px" }}>
                          {elem.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <div className="right-image">
            <img
              src={About}
              alt=""
              style={{ width: "100%", height: "60rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
