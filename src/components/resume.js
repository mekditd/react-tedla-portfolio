import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import database from './skills'


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://avatars1.githubusercontent.com/u/54032716?v=4 "
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Tedla Betsuan</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Web Developer </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Full-Stack Web Developer with a background in Pharmaceutical Solutions. Excited to leverage Kaizen
            event skills in the future as part of a quality-driven team in order to build better experiences
            on the web. Excellent communicator with effective client relationship building skills. Holds a
               certificate in Full Stack Web Development from the University of Texas at Austin.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Austin, Texas</p>
            <h5>Phone</h5>
            <p>(512) 318-5042</p>
            <h5>Email</h5>
            <p>mekdi.td87@outlook.com</p>
            {/* <h5>Web</h5>
            <p>mywebsite.com</p> */}
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="The University of Texas at Austin"
              schoolDescription="Center for Professional Education (CPE)"
            />

            <Education
              //  startYear={2007}
              endYear={2018}
              schoolName="Champions School of Real Estate"
              schoolDescription="Real Estate License Programs"
            />

            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Austin Community College"
              schoolDescription="Engineering"
            />
            <Education
              startYear={1998}
              endYear={2002}
              schoolName="Addis Ababa University"
              schoolDescription="Law"
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Work Experience</h2>
            <p>Worked with three major FDA monitored pharmaceutical companies as Solution Production Specialist where
            I got involved in the manufacturing process of an Intravenous Drug Solutions.
            Participated in the company’s Kaizen Events working with a group of employees to increase productivity
              and safety while maintaining continuous improvement.</p>
            <Experience
              startYear={2017}
              endYear={`present`}
              jobName="Solutions Specialist"
              jobDescription="Specialist at manufacturing process of an Intravenous Drug Solutions"
              companyName="ICU Medical"
            />

            <Experience
              startYear={2015}
              endYear={2017}
              jobName="Solutions Specialist"
              jobDescription="Specialist at manufacturing process of an Intravenous Drug Solutions"
              companyName="Pfizer"
            />
            <Experience
              startYear={2009}
              endYear={2015}
              jobName="Solutions Specialist"
              jobDescription="Specialist at manufacturing process of an Intravenous Drug Solutions"
              companyName="Hospira"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Technical Skills</h2>
            <Skills
              skill="Languages: HTML5, CSS, JavaScript, Node.js, jQuery, APIs, JSON, AJAx, React.js, Tailwind, SaaS, SCSS"
            />

            <Skills
              skill="Database: MySQL, MongoDB"
            />
            <Skills
              skill="Others: Heroku, Git, GitHub, Express.js, Express-session, MVC, Writing tests, Sessions, Templating Engines, Responsive Design, Security and Session Storage, User Authentication"
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
