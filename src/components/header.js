import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitter, FaLinkedin, FaGithubAlt, FaLink, FaGithub } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className="header text-center">
    <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">ATechAdventurer</a></h1>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navigation" className="collapse navbar-collapse flex-column">
        <div className="profile-section pt-3 pt-lg-0">
          
          <div className="bio mb-3">
            Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.
            <br/>
            <a href="about.html">Find out more about me</a>
          </div>
          <ul className="social-list list-inline py-3 mx-auto">
            <li className="list-inline-item"><a href="#"><FaTwitter/></a></li>
            <li className="list-inline-item"><a href="#"><FaLinkedin/></a></li>
            <li className="list-inline-item"><a href="#"><FaGithub/></a></li>

          </ul>
          <hr/>
        </div>
        <ul className="navbar-nav flex-column text-left">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-home fa-fw mr-2"></i>
              Blog Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <div className="my-2 my-md-3">
            <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
