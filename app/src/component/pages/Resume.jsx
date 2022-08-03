import React from 'react';

import resume_data from './resume-data';


class Resume extends React.Component {

  render() {
    return (
      <div>
        <Experience
          data={resume_data["experience"]}
        />
        <Education
          data={resume_data["education"]}
        />
        <Skills />
        <Projects />
        <Publications />
      </div>
    );
  }
}

function Experience(props) {
  let experienceEntries = props.data.map((entry, index) =>
    <ExperienceEntry entryData={entry} key={index}/>
  );

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ul>{experienceEntries}</ul>
    </div>
  );
}

function ExperienceEntry(props) {
  let responsibilityEntries = props.entryData["responsibilities"].map((entry, index) =>
    <ResponsibilityEntry entryData={entry} key={index} />
  );

  return (
    <li className="expereience-entry">
      <h3>{props.entryData["business"]}</h3>
      <em>{props.entryData["job-title"]}</em>
      <ul>{responsibilityEntries}</ul>
    </li>
  );
}

function ResponsibilityEntry(props) {
  return (
    <li className="responsibility-entry">
      <strong>{props.entryData["title"]}</strong>
      : {props.entryData["description"]}
    </li>
  );
}

function Education(props) {
  let educationEntries = props.data.map((entry, index) =>
    <EducationEntry entryData={entry} key={index} />
  );

  return (
    <div className="education">
      <h2>Education</h2>
      <ul>{educationEntries}</ul>
    </div>
  );
}

function EducationEntry(props) {
  let courseEntries = props.entryData["courses"].map((entry, index) =>
    <CourseEntry entryData={entry} key={index} />
  );

  return (
    <li className="education-entry">
      <h3>{props.entryData["university"]}</h3>
      <em>{props.entryData["degree"]}</em>
      <p><strong>Courses: </strong></p>
      <ul>{courseEntries}</ul>
    </li>
  );
}

function CourseEntry(props) {
  return (
    <li className="courseEntry">
      Entry
    </li>
  )
}

function Skills(props) {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        <li>
          UT Austin
        </li>
      </ul>
    </>
  );
}

function Projects(props) {
  return (
    <>
      <h2>Projects</h2>
      <ul>
        <li>
          UT Austin
        </li>
      </ul>
    </>
  );
}

function Publications(props) {
  return (
    <>
      <h2>Publications</h2>
      <ul>
        <li>
          UT Austin
        </li>
      </ul>
    </>
  );
}


export default Resume;