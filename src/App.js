import React from "react";
import "./App.css";

//Main functional component App
const App = () => {
  //Personal information for the CV
  const personalInfo = {
    name: "Zamuxolo Nkombisa",
    title: "Web Developer",
    email: "zamuxolo.nkombisa@gmail.com",
    phone: "+27 61 4914 937",
    linkedin: "linkedin.com/in/zamuxolo-nkombisa-201b47a6",
    github: "github.com/ZamNkombisa",
  };

  //Education information
  const education = [
    {
      school: "Nkululeko Secondary School",
      qualification: "Grade 12",
      year: "January 2006 - November 2010",
    },

    {
      school: "Hyperion Dev",
      qualification: "Full Stack Web Developer",
      year: "July 2023 - April 2024",
      reference: "+27 21 137 6446",
    },
  ];

  //Work experience information
  const experience = [
    {
      position: "Machine Operator",
      company: "Chill Beverages International",
      year: "November 2017 - February 2024",
      responsibilities: [
        "Maintaining machinery by inspecting worn parts and providing regular maintenance.",
        "Conducting quality checks; Fixing issues that might appear; Performing tests and repairs; Analyzing machine operations.",
        "Manually loading materials into the machinery. Working quickly and accurately in a fast-paced production line.",
      ],
      reference: "Mr. J. Ramchundar - +27 84 455 3331",
    },
  ];

  //Skills array
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Bootstrap",
    "Git",
    "Responsive Design",
    "Typescript",
    "Next.js",
    "MongoDB",
  ];

  //Return the JSX structure for rendering
  return (
    <div className="App">
      <header>
        <img src="ZamPicture.jpg" alt="Profile" className="profile-image" />
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.title}</p>
        <ul className="contact">
          <li>Email: {personalInfo.email}</li>
          <li>Phone: {personalInfo.phone}</li>
          <li>
            LinkedIn:{" "}
            <a href={`https://${personalInfo.linkedin}`}>
              {personalInfo.linkedin}
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href={`https://${personalInfo.github}`}>{personalInfo.github}</a>
          </li>
        </ul>
      </header>

      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education">
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <p>{edu.year}</p>
            <p>{edu.reference}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience">
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.year}</p>
            <ul>
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <p>{exp.reference}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

//Export the App component as the default export
export default App;
