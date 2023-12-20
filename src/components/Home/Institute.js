import React from "react";
import "./institute.css";

const Institute = () => {
  return (
    <>
      <div className=" py-4">
        <div className="formsaaa">
          <div className="formmain">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center">
              <iframe
                width="540"
                height="315"
                src="https://www.youtube.com/embed/EQaBSo9-gY8?si=ZnDTvJt1ft5c2mX-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h2
                className="py-2"
                style={{ color: "#fff", padding: "0px 40px" }}
              >
                Fox University
              </h2>
              <p
                className="py-2"
                style={{
                  color: "#fff",

                  fontSize: "18px",
                  justifyContent: "flex-start",
                }}
              >
                Aaksc is an institute dedicated for the preparation of medical
                and engineering. It is a platform where every student is given
                appropriate opportunity to explore his/her potential. Our motto-
                Nurturing careers with care and vision – is reflected in every
                aspect of institute.
              </p>
              <p
                style={{
                  color: "#fff",

                  fontSize: "18px",
                  justifyContent: "flex-start",
                }}
              >
                From petty things like drinking water, seating, lights to all
                necessary things- class notes, doubt clearing & assignments.
                This institute was established under the expect guidance of Mr.
                Anurag Aggarwal, who is guiding, teaching and motivating
                students since 1996. This institute is always ready to make
                changes as per latest pattern of examinations & betterment of
                student and society in future. We had firm belief that strong
                parent-teacher-student relationship can build great career. We
                always advocate for the same and worked for the same.Aakscians
                dominates in all entrances as well as board exams
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institute;
