import React from "react";
import Teacher1 from "../../images/teacher-1.jpg";
import Teacher2 from "../../images/teacher-2.jpg";
import Teacher3 from "../../images/teacher-3.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid" style={{ background: "#FAFAFA" }}>
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
              Our Topper's
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
              place and supplies it with
              <br /> regelialia. It is a paradisematic country
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row py-4">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
                      <img
                        src={Teacher1}
                        alt="teacher one"
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "100px",
                          marginRight: "20px",
                        }}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <p>
                        Far for away, behind the word mountains,
                        <br /> for from the countries Vokalia and Consonantia,
                        <br /> there live the blind texts.
                      </p>
                      <span style={{ fontWeight: "500", fontSize: "20px" }}>
                        Shireen Hanjra
                      </span>
                      <br />
                      <span style={{ color: "#FE0000" }}>PMET 1</span>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row py-4">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
                      <img
                        src={Teacher2}
                        alt="teacher two"
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "100px",
                          marginRight: "20px",
                        }}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <p>
                        Far for away, behind the word mountains,
                        <br /> for from the countries Vokalia and Consonantia,
                        <br /> there live the blind texts.
                      </p>
                      <span style={{ fontWeight: "500", fontSize: "20px" }}>
                        Akhil
                      </span>
                      <br />
                      <span style={{ color: "#FE0000" }}>Air-38(AIMPT) </span>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row py-4">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
                      <img
                        src={Teacher3}
                        alt="teacher three"
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "100px",
                          marginRight: "20px",
                        }}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <p>
                        Far for away, behind the word mountains, <br /> for from
                        the countries Vokalia and Consonantia,
                        <br /> there live the blind texts.
                      </p>
                      <span style={{ fontWeight: "500", fontSize: "20px" }}>
                        Mehul sharma
                      </span>
                      <br />
                      <span style={{ color: "#FE0000" }}>PMET 88</span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
