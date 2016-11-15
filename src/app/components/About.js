'use strict';

import React from 'react';

export class About extends React.Component{
  render(){
    return(
      <div>
      <h1>Justin Byun</h1>
      <h2 className="title"><em>Full-Stack Javascript Developer</em></h2>

      <h3 className="manifesto"><em>As a former Biotech Researcher, I learned the beauty of analytical skills and value of critical thinking: the artistry of science.
        Now, as a full-stack developer, I’d like to add the artistry of science to programming to develop user-friendly, efficient and resource saving apps. </em></h3>

      <h2>Experiences</h2>
        <h3>Per Diem ( University of Washington | Seattle WA, 07/13 - 04/16)</h3>
        <ul>
          <li>Electronics Processing Assistant: hard drive/data destruction</li>
          <li>Research assistant ( Make-A-Wish funded ): beverage consumption study in high schools in Washington State,
            surveyed students and participated in building protocol </li>
        </ul>
        <h3>Research Scientist ( University of Washington-Biochemistry | Seattle WA: 07/07-06/13 )</h3>
        <ul>
          <li>Prep DNA samples and sequence them: optimize and trouble shooting reaction</li>
          <li>Monitoring accuracy and integrity of data produced and posting to the database</li>
          <li>Control sample flows and process to maximize the resource utilization</li>
          <li>Manage and maintain the lab and equipmen</li>
        </ul>

        <h3>Research Engineer ( University of Washington-Pharmacology, Howard Hughes Medical Institute | Seattle WA: 08/05-10/05 )</h3>
        <ul>
        <li> Investigate the roles of cell signaling molecules and pathways in cell growth and development</li>
        <li>Therapeutic goals and projections: understand and control tumorigenesis</li>
        </ul>

      <h2>Education</h2>
        <h3>Code Fellows ( 2016, Seattle WA ) </h3>
          <h4>Certificate in Advanced Full-Stack JavaScript Dev: Sept, 2016</h4>
        <h3>University of Washington ( 2005, Seattle WA ) </h3>
          <h4>Bachelor’s of Sciences: Majors in Biochemistry and Microbiology, Minor in Chemistry</h4>

      <h2>Skill Sets</h2>
        <h3>proficient skills;</h3>
        <h4>javaScript, jQuery, nodeJS, expressJS, bluebirdJS, AngularJS, webpack, REST API, Mocha, gulpJS, HTML5, CSS3/SASS, SQL, noSQL(mongoDB)</h4>

      </div>
    );
  }
};
