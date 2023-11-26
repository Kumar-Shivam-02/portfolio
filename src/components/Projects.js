import React from "react"
import projectData from "../data/projectData.js"

export default function Projects() {

  const projectArray = projectData.data.project

  const Project = ({ title, company, location, date, work }) => (
    <div className="about-containers">
      <div className="details-container">
        <p className="experience-sub-title"><span className="date">{date}</span> {title} | {`${company}, ${location}`} </p>
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
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        {projectArray.map((pro) => (
          <Project key={pro.id} {...pro} />
        ))}
      </div>
      <img
        src="./media/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
    </section>
  )
}