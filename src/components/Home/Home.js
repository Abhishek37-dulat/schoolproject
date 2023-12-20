import React from "react";
import WeOffer from "./WeOffer";
import OurCourses from "./OurCourses";
import CertifiedTeachers from "./CertifiedTeachers";
import RecentBlogs from "./RecentBlogs";
import Institute from "./Institute";
import Inquiry from "./Inquiry";
import Testimonials from "./Testimonials";
import FourSection from "./FourSection";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <FourSection />
        </div>
        <div>
          <WeOffer />
        </div>
        <div>
          <Institute />
        </div>
        <div>
          <OurCourses />
        </div>
        <div>
          <CertifiedTeachers />
        </div>
        <div>
          <Inquiry />
        </div>
        <div>
          <RecentBlogs />
        </div>
        <div>
          <Testimonials />
        </div>
        {/* <div>
          <Gallery />
        </div> */}
      </div>
    </>
  );
};

export default Home;
