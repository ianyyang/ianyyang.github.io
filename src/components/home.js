import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className='home-grid'>
            <Cell col={12}>
              <div className='breaker'>
                <br></br>
              </div>
              <div className="banner-text">
                <h1>Hello! I'm Ian Yang!</h1>
                <p>
                  Computer Science & Statistics Student
                  <br></br>
                  University of Toronto
                </p>
                <hr/>
              </div>

              <div className="social-links">
                {/* Resume */}
                <a href='../Resume (Ian Yang).pdf' rel="noopener noreferrer" target="_blank">
                  <img src='../images/resume.svg' alt="Resume" className="resume-icon"/>
                </a>

                {/* Projects */}
                <a href='https://www.google.com/' rel="noopener noreferrer" target="_blank">
                  <img src='../images/projects.svg' alt="Projects" className="projects-icon"/>
                </a>

                {/* GitHub */}
                <a href='https://github.com/ianyyang/' rel="noopener noreferrer" target="_blank">
                  <img src='../images/github.svg' alt="GitHub" className="github-icon"/>
                </a>

                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/ianyyang/' rel="noopener noreferrer" target="_blank">
                  <img src='../images/linkedin.svg' alt="LinkedIn" className="linkedin-icon"/>
                </a>

                {/* Email */}
                <a href='mailto:iany.yang.utoronto.ca' rel="noopener noreferrer" target="_blank">
                  <img src='../images/email.svg' alt="Email" className="email-icon"/>
                </a>
              </div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Home;