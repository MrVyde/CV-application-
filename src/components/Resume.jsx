import '../App.css';

function Resume({ cvData }) {
  if (!cvData) return null;

  const { name, contact, aboutMe, languages, skills, education, experience, awards } = cvData;

  return (
    <div className="resume-container">
      <h2>{name}</h2>
      <div className="resume-section">
        <h3>Contact</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Website: {contact.website}</p>
        <p>Address: {contact.address}</p>
      </div>

      <div className="resume-section">
        <h3>About Me</h3>
        <p>{aboutMe}</p>
      </div>

      <div className="resume-section">
        <h3>Languages</h3>
        <ul>{languages.map((lang, i) => <li key={i}>{lang}</li>)}</ul>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <ul>{skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <ul>{education.map((school, i) => <li key={i}>{school}</li>)}</ul>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <ul>{experience.map((job, i) => <li key={i}>{job}</li>)}</ul>
      </div>

      <div className="resume-section">
        <h3>Awards</h3>
        <ul>{awards.map((award, i) => <li key={i}>{award}</li>)}</ul>
      </div>
    </div>
  );
}

export default Resume;