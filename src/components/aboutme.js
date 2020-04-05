import React, { Component } from 'react';



class About extends Component {
  render() {
    const mystyle = {
      color: "rgba(0,0,0, 0.87)",
      padding: "20px",
      fontFamily: "Arial"
    };
    return (
      <div style={mystyle}>
        <h1>Tedla Betsuan</h1>
        <p >
            Full-Stack Web Developer with a background in Pharmaceutical Solutions. Excited to leverage <br />
          Kaizen event skills in the future as part of a quality-driven team in order to build better <br />
          experiences on the web. Excellent communicator with effective client relationship building <br />
          skills. Holds a certificate in Full Stack Web Development from the University of Texas at Austin. 
        </p>
        <p >
            Worked with three major FDA monitored pharmaceutical companies as a Solution Production <br />
          Specialist where I got involved in the manufacturing process of an Intravenous Drug <br />
          Solutions. Participated in the company’s Kaizen Events working with a group of employees <br />
          to increase productivity and safety while maintaining continuous improvement. 
        </p>

      </div>
    )
  }
}

export default About;
