import React from "react";
import Gal2 from "../../images/blog-2.jpg";
import Gal3 from "../../images/blog-3.jpg";
import Gal4 from "../../images/blog4.jpg";

const Gallery = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="card">
            <img src={Gal4} alt="gal1" style={{ width: "345px" }} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="card">
            <img src={Gal2} alt="gal2" style={{ width: "345px" }} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="card">
            <img src={Gal3} alt="gal3" style={{ width: "345px" }} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <div className="card">
            <img src={Gal4} alt="gal4" style={{ width: "345px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
