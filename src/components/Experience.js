import React from "react"
import experienceData from "../data/experienceData.js"

export default function Experience() {

  const experienceArray = experienceData.data.experience

  const Experience = ({ designation, company, location, date, work }) => (
    <div className="about-containers">
      <div className="details-container">
        <p className="experience-sub-title"><span className="date">{date}</span> {designation} | {`${company}, ${location}`} </p>
        <div className="experience-container">
          <ul>
            {work.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        {experienceArray.map((exp) => (
          <Experience key={exp.id} {...exp} />
        ))}
      </div>
      <img
        src="./media/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#projects')}
      />
    </section>
  )
}