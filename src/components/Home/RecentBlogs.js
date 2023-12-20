import React from "react";
import "./blogs.css";
import { BlogsData } from "../../Data/BlogsData";
import { FaArrowRightLong } from "react-icons/fa6";

const RecentBlogs = () => {
  return (
    <>
      <div className="container">
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
                color: "#333333",
              }}
            >
              Recent Blogs
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
              place and supplies it with the necessary
              <br /> regelialia. It is a paradisematic country
            </p>
          </div>
        </div>
        <div className="row">
          {BlogsData.map((elem, id) => {
            return (
              <>
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                  key={id}
                >
                  <div className="card py-3">
                    <img
                      src={elem.image}
                      alt="blogs"
                      style={{ position: "relative" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        background: "#5D50C6",
                        height: "88px",
                        width: "45px",
                        top: "150px",
                      }}
                    >
                      <span
                        className=""
                        style={{
                          color: "#fff",

                          alignItems: "center",
                        }}
                      >
                        26 <br />
                        June <br />
                        2023
                      </span>
                    </div>
                    <p className="py-2 blog-title">{elem.title}</p>
                    <p style={{ color: "#8E8E8E" }}>{elem.text}</p>
                    <button
                      style={{
                        background: "#FE0000",
                        width: "120px",
                        height: "40px",
                        borderRadius: "50px",
                        border: "1px solid #FD5F00",
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      Read More {"  "}
                      <FaArrowRightLong size={12} />
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

export default RecentBlogs;
