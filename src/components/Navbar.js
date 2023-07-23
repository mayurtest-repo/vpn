import React from 'react'

function navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#Navbar">Into<span>devlope</span>.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Services">Services</a>
        </li>
        <li classNameName="nav-item">
          <a className="nav-link" href="#Portfolio"> Portfolio </a>
        </li>
        <li classNameName="nav-item">
          <a className="nav-link" href="#Contact"> Contact </a>
        </li>
        <li classNameName="nav-item">
        <a href="https://www.mediafire.com/file/2gzko35k1e7qe7k/cv.pdf/file"><button type="button" className="btn btn-primary btn-nav">Download CV</button></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
  )
}

export default navbar;