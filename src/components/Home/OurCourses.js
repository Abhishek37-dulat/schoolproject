import React from "react";
import "./ourcourses.css";
import { CourseData } from "../../Data/CourseData";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";

const OurCourses = () => {
  return (
    <>
      <div className="container-fluid py-4">
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
              Our Courses
            </h1>
          </div>
        </div>
        <div className="row py-4">
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
          {CourseData.map((elem, id) => {
            return (
              <>
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                  key={id}
                >
                  <div className="card py-3">
                    <div className="row" style={{ height: "280px" }}>
                      <img src={elem.image} alt="courses" className="imagess" />
                    </div>

                    <div className="row py-2">
                      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <FaUser size={13} style={{ color: "#FE0000" }} />{" "}
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          {elem.author}
                        </span>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <IoMdGrid size={13} style={{ color: "#FE0000" }} />{" "}
                        <span style={{ fontSize: "13px", fontWeight: 600 }}>
                          {elem.seat} Seats
                        </span>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <FaCalendarAlt size={13} style={{ color: "#FE0000" }} />{" "}
                        <span style={{ fontSize: "13px", fontWeight: 600 }}>
                          {elem.experience} Years
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "#333333",
                      }}
                    >
                      {elem.title}
                    </p>
                    <p style={{ fontSize: "18px", color: "#8E8E8E" }}>
                      {elem.text}
                    </p>
                    <button
                      style={{
                        background: "#FE0000",
                        width: "110px",
                        height: "40px",
                        borderRadius: "50px",
                        border: "1px solid #FD5F00",
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      Apply Now
                    </button>
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

export default OurCourses;
