import React from "react";
import Bg5 from "../../images/bg_5.jpg";
import "./inquiry.css";
/* https://codepen.io/vivekmengu/pen/VayVjL */
const Inquiry = () => {
  return (
    <>
      <div className="">
        <div className="formsaaa">
          <div className="formmain">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-center">
              {/* <div className="image-section">
              <div
                className="myinq"
                style={{ height: "640px", width: "1315px" }}
              >
                <img src={Bg5} alt="body-image" style={{ width: "1260px" }} />
              </div>
            </div> */}
              <div className="row formzz">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  {" "}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h2
                    style={{ color: "#fff", fontSize: "45px", fontWeight: 700 }}
                  >
                    Request A Quote
                  </h2>
                  <p style={{ color: "#fff" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>

                  <div className="sec2contactform">
                    <form>
                      <div className="clearfix">
                        <input
                          className="col2 first"
                          type="text"
                          placeholder="FirstName"
                        />

                        <input
                          className="col2 last"
                          type="text"
                          placeholder="LastName"
                        />
                      </div>

                      <div className="clearfix">
                        <input
                          class="col2 first"
                          type="Email"
                          placeholder="Email"
                        />

                        <input
                          className="col2 last"
                          type="text"
                          placeholder="Contact Number"
                        />
                      </div>
                      <div className="clearfix">
                        <textarea name="textarea" id="" cols="30" rows="7">
                          Your message here...
                        </textarea>
                      </div>
                      <div className="clearfix">
                        <input type="submit" value="Request A Quote" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
