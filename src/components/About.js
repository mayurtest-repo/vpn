import React from "react";
import myimg from "../images/me-abt.png";

function About() {
  return (
    <>
      <section id="About">
        <div className="container abt">
          <div className="about-img">
            <img src={myimg} alt="" className="ab-img" />
          </div>
          <div className="about-te">
            <div className="abt-te">
              <div className="abt-h">
                <h2 className="abt-h">About</h2>
              </div>
              <h4>A web developer and Designer.</h4>
              <p className="abt-p">
                {" "}
                I'm an India based web developer and designer.Currently a
                student
                <br /> pursuing BCA. I build anything from mobile application to
                websites.
                <br /> My passion is to simply bring the best user experience to
                your screen.
                 Been into this field for the past two years.
              </p>
              <a href="#Contact" className="ab-button"><button type="button" className="btn btn-primary h-btn">
                Hire Me
              </button></a>
              <div class="contact-icon cnt">
              <a className="ab-link" href="https://twitter.com/ParishmitaGhos1"><i class="fi fi-brands-twitter"></i></a>
                <i class="fi fi-brands-facebook"></i>
                <a className="ab-link" href="https://www.linkedin.com/in/parishmita-ghosh-0360bb215/"><i class="fi fi-brands-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
