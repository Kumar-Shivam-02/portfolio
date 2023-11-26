import React from "react"

export default function Profile() {
  const openResume = () => {
    window.open('Kumar_Shivam_Resume.pdf', '_blank');
  };

  const redirectToContact = () => {
    window.location.href = './#contact';
  };

  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kumarshivam0002', '_blank');
  };

  // const redirectToGithub = () => {
  //   window.open('https://www.google.com', '_blank');
  // };

  return (
    <section id="profile">
      <div className="section__pic-container">
          <img src="./media/profilePic.png" alt="Kumar Shivam" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Kumar Shivam</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={redirectToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
              src="./media/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={redirectToLinkedIn}
          />
          {/* <img
              src="./media/github.png"
              alt="My Github profile"
              className="icon"
              onClick={redirectToGithub}
          /> */}
        </div>
      </div>
    </section>
  )
}