import React from "react";
import mypng from "../images/bg-2.gif";
import myimg from "../images/bg-3.png";
function Home() {
  return (
    <>
      <section id="Home">
        <div className="container row align-items-center ">
          <div className="Home-text col-md-6 intros text-start">
            <p >Hey there</p>
            <h1 className="ht-p">
              <span>I'm</span> Parishmita
            </h1>
            <h3 className="ht-p">A Full Stack Developer and Designer</h3>
            <p>
              An India based Web Developer and Designer <br/>
              who brings the best user experience
               to your screen.
            </p>
            <a href="https://www.mediafire.com/file/2gzko35k1e7qe7k/cv.pdf/file"><button type="button" className="btn btn-primary">
              Download CV
            </button></a>
          </div>
          <div className="Home-img col-md-6 intros text-end">
            <img src={myimg} alt="no img" className="bg-2" />
            <img src={mypng} alt="no img" className="bg-1" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
