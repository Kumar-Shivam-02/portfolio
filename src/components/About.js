import React from "react"
import skillsData from "../data/skillsData.js"

export default function About() {

  const skillsArray = skillsData.data.skills

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        {/* <div className="section__pic-container">
          <img
            src="./media/profilePic.png"
            alt="Kumar Shivam"
            className="about-pic"
          />
        </div> */}
        <div className="about-details-container">
          <div className="text-container">
            <p className="section__text__p3">
            Dedicated and versatile professional with a Master's in Computer Science from SFU, possessing a robust skill set that 
            includes Python, SQL, React, Azure, and more, along with a solid foundation in Data Structures and Algorithms. 
            Actively seeking a challenging role in a conducive work environment to apply my skills and analytical thinking 
            for organizational growth. Passionate about technology and committed to continuous learning, I aim to contribute 
            to a dynamic team that embraces new challenges, providing opportunities for both professional satisfaction and personal growth.
            </p>
          </div>
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./media/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>4+ years <br />Software Development</p>
            </div>
            <div className="details-container">
              <img
                src="./media/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>M.S. CS @ SFU<br />B.Tech. CSE @ VIT</p>
            </div>
          </div>   
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Skills</h2>
              <div className="article-container">
                {skillsArray.map((arrayValue, index) => (
                <article key={index}>
                  <img
                    src="./media/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{arrayValue}</h3>
                  </div>
                </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./media/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
      />
    </section>
  )
}