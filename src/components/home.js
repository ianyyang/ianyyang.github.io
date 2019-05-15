import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

var greetings = ['Hello', 'Hallo', 'Jambo', 'Barev dzez', 'Mingalarba', 'Chum reap suor', 'Ni hao', 'Namaste', 'Halo', 'Konnichiwa', 'Annyeonghaseyo', 'Sabaidee', 'Sain baina uu', 'Kumusta', 'Vanakkam', 'Sà-wàt-dee', 'Xin chào', 'Tungjatjeta', 'Zdravejte', 'Bok', 'Ahoj', 'Hej', 'Terve', 'Bonjour', 'Dia duit', 'Guten tag', 'Yasass', 'Szervusz', 'Halló', 'Salve', 'God dag', 'Cześć', 'Olá', 'Salut', 'Zdravstvuyte', 'Zdravo', 'Hola', 'Hej', 'Vitayu', 'As-salām ‘alaykum', 'Shalom', 'Salâm', 'Merhaba', 'Aloha'];
var greeting = greetings[Math.floor(Math.random()*greetings.length)];

class Home extends Component {
  render() {
    return (
      <div>
        <Grid className='home-grid'>
          <Cell col={12}>
            <div className='breaker'>
              <br></br>
            </div>
            <div className="banner-text">
              <h1>Chum reap suor! <span>I'm Ian Yang!</span></h1>
              <p>
                Computer Science & Statistics Student
                <br></br>
                University of Toronto
              </p>
              <hr/>
            </div>

            <div className="social-links">
              {/* Resume */}
              <a href='../resources/Resume (Ian Yang).pdf' rel="noopener noreferrer" target="_blank">
                <img src='../images/resume.svg' alt="Resume" className="social-icon"/>
              </a>

              {/* Projects */}
              <a href='https://www.google.com/' rel="noopener noreferrer" target="_blank">
                <img src='../images/projects.svg' alt="Projects" className="social-icon"/>
              </a>

              {/* GitHub */}
              <a href='https://github.com/ianyyang/' rel="noopener noreferrer" target="_blank">
                <img src='../images/github.svg' alt="GitHub" className="social-icon"/>
              </a>

              {/* LinkedIn */}
              <a href='https://www.linkedin.com/in/ianyyang/' rel="noopener noreferrer" target="_blank">
                <img src='../images/linkedin.svg' alt="LinkedIn" className="social-icon"/>
              </a>

              {/* Email */}
              <a href='mailto:iany.yang.utoronto.ca' rel="noopener noreferrer" target="_blank">
                <img src='../images/email.svg' alt="Email" className="social-icon"/>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;