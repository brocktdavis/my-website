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
        <Skills
          data={resume_data["skills"]}
        />
        <Projects
          data={resume_data["projects"]}
        />
        <Publications
          data={resume_data["publications"]}
        />
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
      <strong>{props.entryData["business"]}</strong>
      <br />
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
  /* Comma delimited list of courses */
  let courseList = props.entryData["courses"].join(", ");

  return (
    <li className="education-entry">
      <strong>{props.entryData["university"]}</strong>
      <br />
      <em>{props.entryData["degree"]}</em>
      <p><strong>Courses: </strong>{courseList}</p>
    </li>
  );
}

function Skills(props) {
  let skillsEntries = props.data.map((entry, index) =>
    <SkillEntry entryData={entry} key={index} />
  );

  return (
    <>
      <h2>Skills</h2>
      <ul>{skillsEntries}</ul>
    </>
  );
}

function SkillEntry(props) {
  let specificSkillEntries = props.entryData["items"].join(", ");

  return (
    <li>
      <strong>{props.entryData["category"]}: </strong>{specificSkillEntries}
    </li>
  );
}

function Projects(props) {
  let projectList = props.data.map((entry, index) =>
    <ProjectEntry entryData={entry} key={index} />
  );

  return (
    <>
      <h2>Projects</h2>
      <ul>{projectList}</ul>
    </>
  );
}

function ProjectEntry(props) {
  return(
    <li>
      <strong>{props.entryData["title"]}: </strong>
        {props.entryData["description"]} &nbsp;
        Tech: {props.entryData["tech"]} &nbsp;
        ({props.entryData["timeframe"]})
    </li>
  );
}

function Publications(props) {
  let publicationList = props.data.map((entry, index) =>
    <PublicationEntry entryData={entry} key={index} />
  );

  return (
    <>
      <h2>Publications</h2>
      <ul>{publicationList}</ul>
    </>
  );
}

function PublicationEntry(props) {
  return (
    <li>
      <strong>{props.entryData["type"]}: {props.entryData["title"]}: </strong>
      {props.entryData["description"]} &nbsp;
      Tech: {props.entryData["tech"]} &nbsp;
      ({props.entryData["timeframe"]})
    </li>
  )
}


export default Resume;