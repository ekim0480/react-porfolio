import React from "react";
import "./style.css"

function Contact() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Contact Me</h1>
        <hr className="my-4" />
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Jane Doe"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="useremail"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              id="usermessage"
              rows="6"
            ></textarea>
          </div>
        </form>
        <div className="contactmelinks">
          <ul>
            <li>
              <a href="https://docs.google.com/document/d/1MqHmtXrz86U_egdg2ut--5FD_rafg94MT7TdZRoyz74/edit?usp=sharing">Resume</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
