'use strict';

import { Component } from 'react';
import { render } from 'react-dom';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';

export class Resume extends Component {
  render() {
    return (
      <div className="resume-class">
        <hr />
        <br />
        <br />
        <br />
        <h1 style={{color: 'white', textAlign: 'center', fontSize: 70, fontFamily: 'Ranga'}}>Justin Byun</h1>
        <br />
        <h2 style={{textAlign: 'center', fontFamily: 'Ranga', fontSize: 50}}><em>Full-Stack Software Developer</em></h2>
        <br />
        <h3 style={{textAlign: 'center', color: '#7a7aff', fontStyle: 'bold'}}><em>As a former Biotech Researcher, <br/>I learned the beauty of analytical skills and value of critical thinking: the artistry of science.
          Now, as a full-stack software developer, I’d like to add the artistry of science to programming to develop user-friendly, efficient and resource saving apps. </em></h3>
        <br />
        <br />
        <br />
        <h2 style={{fontSize:40, fontFamily: 'Lobster', textAlign: 'left',}}>Experiences</h2>
          <hr />
          <a href="http://heyduwamish.org"><h3 style={{color: 'yellow'}}>Open Source Contributor at heyduwamish.org ( Seattle WA, 12/16 - current )</h3></a>
          <h4>: We are a community of residents and stakeholders monitoring pollution and improving environmental health for the Duwamish Valley.</h4>
          <h4>: Portrays the history of Duwamish river and proper over time and the environmental effects due to city development, and the users can log in and report and/or share the ideas</h4>
          <h3 style={{color: 'yellow'}}>Teaching Assistant at CodeFellows ( Seattle WA, 01/17 - 02/17 )</h3>
          <h4>: Help students learning javaScript, HTML5 and CSS3</h4>
          <h3 style={{color: 'yellow'}}>Contract ( University of Washington | Seattle WA, 07/13 - 04/16)</h3>
          <h4>
            <ul>
              <li>Electronics processing Assistant: hard drive/data destruction</li><br/>
              <li>Research assistant ( Make-A-Wish funded ): beverage consumption study in high schools in Washington State,<br/>
                surveyed students and participated in building protocol </li><br/>
            </ul>
          </h4>
          <h3 style={{color: 'yellow'}}>Research Scientist ( University of Washington-Biochemistry | Seattle WA: 07/07-06/13 )</h3><br/>
          <h4>
          <ul>
            <li>Prep DNA samples and sequence them: optimize and trouble shooting reaction</li><br/>
            <li>Monitoring accuracy and integrity of data produced and posting to the database</li><br/>
            <li>Control sample flows and process to maximize the resource utilization</li><br/>
            <li>Manage and maintain the lab and equipmen</li><br/>
          </ul>
          </h4>
          <h3 style={{color: 'yellow'}}>Research Engineer ( University of Washington-Pharmacology, Howard Hughes Medical Institute | Seattle WA: 08/05-10/05 )</h3><br/>
          <h4>
          <ul>
          <li> Investigate the roles of cell signaling molecules and pathways in cell growth and development</li><br/>
          <li>Therapeutic goals and projections: understand and control tumorigenesis</li><br/>
          </ul>
          </h4>
          <br />
        <h2 style={{fontSize:40, fontFamily: 'Lobster', textAlign: 'left',}}>Education</h2>
        <hr />
          <h3 style={{color: 'yellow'}}>Code Fellows ( 2016, Seattle WA ) </h3><br/>
            <h4>Certificate in Advanced Full-Stack JavaScript Dev: Sept, 2016</h4><br/>
          <h3 style={{color: 'yellow'}}>University of Washington ( 2005, Seattle WA ) </h3><br/>
            <h4>Bachelor’s of Sciences: Majors in Biochemistry and Microbiology, Minor in Chemistry</h4><br/>
        <br />
        <h2 style={{fontSize:40, fontFamily: 'Lobster', textAlign: 'left',}}>Skill Sets</h2>
        <hr />
          <h3 style={{color: 'yellow'}}>advanced skills;</h3>
          <h4>javaScript, jQuery, nodeJS, expressJS, buebirdJS, Angular 1, ReactJS, python, webPack, RESTful API, Mocha, GulpJS, HTML5, CSS3/SASS, SQL(SQLite, postgreSQL), noSQL(mongoDB, RethinkDB)</h4>
          <h3 style={{color: 'yellow'}}>intermediate;</h3>
          <h4>R, AWS(web dev-assoc), Docker(ver 1.12), java, goLang</h4>
        <br />
        <h2 style={{fontSize:40, fontFamily: 'Lobster', textAlign: 'left',}}>Completed Group Projects</h2>
          <hr />
          <a style={{color: '#f41685'}} href="http://github.com/sjb3/brew-buddy-coffee-companion"><h3>_brewBuddy_coffeeCompanion ( Sept 2016 )</h3></a>
            <h4>
            <ul>
            <li>Focus Group: from everyday coffee drinkers to coffee aficinado</li>
            <li>Objectives: clients can customize their daily morning joe&#39;s to order, along with optional reviews/personal blogs</li>
            <li>For Backend, API is created with nodeJS utilizing expressJS to handle user requests, and mongoDB, and later tested with mocha and gulpJS:
              For Frontend, angularJS, HTML5, CSS3 were used along with webPack and subsequent testing with Karma and Jasmine</li>
          </ul>
          </h4>
          <a style={{color: '#f41685'}} href="http://github.com/BbDgtl/finalProject-301n1"><h3>_concert Finder ( Feb 2016 )</h3></a>
            <h4>
            <ul>
            <li>Focus Group: concert goers worldwide</li>
            <li>Objectives: lets clients find concerts of interests at keystrokes, location service with ticket info at songKick link</li>
            <li>Created with songKick and mapBox API’s with leafletJS</li>
          </ul>
          </h4>
          <br />
          <br />
          <hr />
      </div>
    )
  }
};
