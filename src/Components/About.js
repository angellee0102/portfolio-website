import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Angel Lee Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h1>About Me</h1>
            <div className="">
            <h2>{bio1}</h2>
            <h2>{bio2}</h2>
            <h2>{bio3}</h2>
            </div>
            <div className="row">
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button">
                      <i className="fa fa-chevron-right"></i>View Resume</a>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
