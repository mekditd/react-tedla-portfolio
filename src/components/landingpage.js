import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars1.githubusercontent.com/u/54032716?v=4 "
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/tedla-betsuan-116134190/" rel="noopener noreferrer" target="_blank">LinkedIn
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                {/* Github */}
                <a href="https://github.com/mekditd" rel="noopener noreferrer" target="_blank">Github
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                {/* Dice */}
                <a href="https://www.dice.com/dashboard" rel="noopener noreferrer" target="_blank">Dice
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
