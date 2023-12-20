import React from "react";
import "./banner.css";
// import Banner1 from "../../images/bg_1.jpg";
// import Banner2 from "../../images/bg_2.jpg";
// import Banner3 from "../../images/bg_1.jpg";
/* https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio */
const Banner = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner startsection">
              <div className="carousel-item active ">
                <div
                  className="myfirst"
                  style={{ height: "620px", textAlign: "center" }}
                >
                  {/* <img
                    src={Banner1}
                    className="d-block w-100 banner-image1"
                    alt="bn1"
                  /> */}
                  <div className="banner1">
                    <h2
                      className="justify-content-center"
                      style={{
                        color: "#fff",
                        fontSize: "52px",
                        fontWeight: 600,
                        padding: "10px 0px",

                        textAlign: "start",
                      }}
                    >
                      University, College
                      <br /> School Education
                    </h2>
                    <p
                      style={{
                        color: "#fff",
                        padding: "0px 0px",
                        justifyContent: "flex-start",
                        textAlign: "start",
                      }}
                    >
                      A small river named duden flows by thier place and
                      supplies it with <br />
                      the necessary regelialia.
                    </p>
                    <button
                      style={{
                        background: "#FE0000",
                        color: "#fff",
                        width: "140px",
                        height: "50px",
                        border: 0,
                        borderRadius: "50px",
                        fontWeight: 600,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="mysecond"
                  style={{ height: "620px", textAlign: "center" }}
                >
                  {/* <img
                    src={Banner2}
                    className="d-block w-100 banner-image2"
                    alt="bn2"
                  /> */}
                  <div className="banner2">
                    <h2
                      style={{
                        color: "#fff",
                        fontSize: "52px",
                        fontWeight: 600,
                        padding: "0px 0px",
                        justifyContent: "flex-start",
                        textAlign: "start",
                      }}
                    >
                      Education needs <br /> complete solutions
                    </h2>
                    <p
                      style={{
                        color: "#fff",
                        padding: "0px 0px",
                        justifyContent: "flex-start",
                        textAlign: "start",
                      }}
                    >
                      A small river named duden flows by thier place and
                      supplies it with
                      <br /> the necessary regelialia.
                    </p>
                    <button
                      style={{
                        background: "#FE0000",
                        color: "#fff",
                        width: "140px",
                        height: "50px",
                        border: 0,
                        borderRadius: "50px",
                        fontWeight: 600,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="mythird"
                  style={{ height: "620px", textAlign: "center" }}
                >
                  {/* <img
                  src={Banner3}
                  className="d-block w-100 banner-image3"
                  alt="bn3"
                /> */}
                  <div className="banner3">
                    <h2
                      style={{
                        color: "#fff",
                        fontSize: "52px",
                        fontWeight: 600,
                        padding: "0px 0px",
                        justifyContent: "flex-start",
                        textAlign: "start",
                      }}
                    >
                      University, College
                      <br /> School Education
                    </h2>
                    <p
                      style={{
                        color: "#fff",
                        padding: "0px 0px",
                        justifyContent: "flex-start",
                        textAlign: "start",
                      }}
                    >
                      A small river named duden flows by thier place and
                      supplies it with
                      <br /> the necessary regelialia.
                    </p>
                    <button
                      style={{
                        background: "#FE0000",
                        color: "#fff",
                        width: "140px",
                        height: "50px",
                        border: 0,
                        borderRadius: "50px",
                        fontWeight: 600,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
