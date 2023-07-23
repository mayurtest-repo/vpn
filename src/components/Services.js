import React from "react";
import webdev from "../images/web dev.gif";
import uiux from "../images/ui ux.gif";
import gd from "../images/dizzy-designer.gif";
function Services() {
  return (
    <>
      <section id="Services">
        <div className="container services">
          <div className="service-h">
            <div className="s-h">
              <h6>I can help you with?</h6>
              <h3 className="abt-h">My Services</h3>
            </div>
          </div>
          <div className="service-te  ">
            <div className="serv-card">
              <img className="s-img" src={webdev} alt="pic" />
              <h5>Web Development</h5>
              <p>
                I create creative and resposive website to bring the
                <br />
                best user experience to your screen.
              </p>
            </div>
            <div className="serv-card">
              <img className="s-img" src={uiux} alt="pic" />
              <h5>Web Design</h5>
              <p>
                I create resposive and creative design that suits user type.
                Every design needs wireframes and prototyping to make it
                understandable and resposive
              </p>
            </div>
            <div className="serv-card">
              <img className="s-img" src={gd} alt="pic" />
              <h5>Graphiv Design</h5>
              <p>
                Templates, fonts, graphics, etc design everything from your
                intagram
                <br />
                handel to your portfolio template
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
