import React from "react";

function Contact() {
  return (
    <>
      {/* <!-- contact section --> */}
      <section className="contact" id="Contact">
        <div className="container mycontact">
          <div className="contact-text">
            <div className="contact-heading cnt">
              <h2>
                Contact<span> Me</span>
              </h2>
              <h6>If you have any questions in your mind.</h6>
              <p>Lets have a cup of responsivity with a spoon of creativity.</p>
            </div>
            <div className="list cnt">
              <ul>
                <li>
                  <a className="c-link" href="tel:8812992031">(91+) 8812992031</a>
                </li>
                <li>
                  <a  className="c-link" href="mailto:ghoshparishmita19@gmail.com">
                    ghoshparishmita19@gmail.com
                  </a>
                </li>
                <li>Pachpota, Garia Kolkata, West bengal</li>
              </ul>
            </div>
            <div className="contact-icon cnt">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-github"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-form cnt">
              <form action="">
                <input type="name" placeholder="Your name" required />
                <input type="email" placeholder="Your email address" required />
                <input
                  type="mobile"
                  placeholder="Your mobile number"
                  required
                />
                <textarea
                  name=""
                  id=""
                  rows="10"
                  cols="35"
                  placeholder="Wanna build something?"
                ></textarea>

                <a href="mailto:ghoshparishmita19@gmail.com">
                  <input
                    type="button"
                    value="Send Message"
                    className="button required"
                  />
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      <section className="end">
   
    <footer class="end">
      <div><p>@copyright 2023 by intodevlope.</p></div>
    </footer>
   
      </section>
    </>
  );
}

export default Contact;
