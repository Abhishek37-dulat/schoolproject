import { PiStudentFill } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";

export const OfferData = [
  {
    id: 1,
    title: "Overall Performance",
    text: "AAKSC focuses on the holistic development of the student so that he/she can face and perform well in any exam in future.",
    icon: (
      <AiFillSafetyCertificate
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    id: 2,
    title: "Weekly Tests",
    text: "Weekly tests are taken to recognize the strengths & to make improvements",
    icon: (
      <PiStudentFill
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    id: 3,
    title: "Regular Assignments",
    text: "Students are provided with regular topic wise assignments so that they give a proper time to their studies.",
    icon: (
      <GrCertificate
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    id: 4,
    title: "Lecture recording lab",
    text: "Well planned lab ,where students can attend video lectures as per their convenience for better understanding",
    icon: (
      <PiStudentFill
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    id: 5,
    title: "Concepts Based Studies",
    text: "Before starting with the syllabus, the basic concepts of Chemistry are cleared for better understanding.",
    icon: (
      <PiStudentFill
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    id: 6,
    title: "Visual Sessions",
    text: "Visual sessions are also organized to make the subject more interesting.",
    icon: (
      <PiStudentFill
        size={40}
        style={{
          color: "#FFFFF1",
          marginLeft: "20px",
          marginTop: "15px",
        }}
      />
    ),
  },
];
