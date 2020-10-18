import React from "react";
import "./style.css"

function About() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>About Me</h1>
        <hr className="my-4" />
        <img
          className="selfportrait"
          src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/222515_503360721063_7655_n.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_ohc=YItFXvFj1OEAX-JOVol&_nc_ht=scontent-ort2-2.xx&oh=1835b26a32f0bbca039cb1be39045889&oe=5FB2441C"
          alt=""
        />
        <p>
          Welcome!  My name is Eddie Kim and I am currently learning coding.
        </p>
        <p>
          I am currently in the Chicagoland area and I work at a travel agency run by my parents and invest in real estate.
        </p>
        <p>
          During my free time, I like to play almost any sport, go to the gym, eat good food, play video games, and code!
        </p>
        <p>
          I think my current instructor is super smart and really knows his coding!  The TAs are just as awesome as well!
        </p>
        <p>
          Please check back for more updates.
        </p>
      </div>
    </div>
  );
}

export default About;
