import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <aside className="footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact</h4>
              <p className="address">
                {name}
                <br />
                {email}
              </p>
            </div>
          </aside>
            <div>
              <a href="https://www.web-stat.com">
                <img
                  alt="Web-Stat site stats"
                  src="https://wts.one/7/4/2024775.png"
                ></img>
              </a>
            </div>
        </div>
      </section>
    );
  }
}

export default Contact;
