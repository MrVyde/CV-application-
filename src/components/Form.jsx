import { useState } from "react";
import ContactInfo from './ContactInfo';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import '../App.css';

export default function Form({ onSubmit }) {
    const [contact, setContact] = useState({
    phone: '',
    email: '',
    website: '',
    address: '',
  }) 


    const [aboutMe, setAboutMe] = useState('');
    const [languages, setLanguages] = useState(['']);
    const [skills, setSkills] = useState(['']);

    const [name, setName] = useState('');
    const [education, setEducation] = useState(['']);


    const [experience, setExperience] = useState(['']);
    const [awards, setAwards] = useState(['']);
    
const handleChange = (e) => {
    const { name, value } = e.target;
setContact((prev) => ({ ...prev, [name]: value})) 
};

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
}

return (
    
    <form className="form-container" onSubmit={handleSubmit}>
        <div className="left-column">
            {/* Avatar Placeholder */}
            <div className="avatar-box">
                <div className="avatar-placeholder">👤</div>
                <p>Avatar (Male/Female)</p>
            </div>
            {/* ✅ Refactored Contact Section */}
            <ContactInfo contact={contact} setContact={setContact} />
            {/* About Me Section */}
            <div className="section">
                <h3>About Me</h3>
                <textarea
                    placeholder="Write a short summary about yourself"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                    rows={4}
                />
            </div>
            {/* Languages Section */}
            <div className="section">
                <h3>Languages</h3>
                {languages.map((lang, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Language ${index + 1}`}
                        value={lang}
                        onChange={(e) => {
                        const newLangs = [...languages];
                        newLangs[index] = e.target.value;
                        setLanguages(newLangs);
                    }}
                    />
                ))}
                {languages.length < 5 && (
                <button
                type="button"
                onClick={() => setLanguages([...languages, ''])}
                >
                + Add Language
                </button>
                )}
            </div>
            {/* Skills section */}
            <div className="section">
                <h3>Skills</h3>
                {skills.map((skill, index) => (
                <input
                key={index}
                type="text"
                placeholder={`Skill ${index + 1}`}
                value={skill}
                onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index] = e.target.value;
                    setSkills(newSkills);
                }}
                />
                ))}
                {skills.length < 6 && (
                    <button
                    type="button"
                    onClick={() => setSkills([...skills, ''])}
                    >
                    + Add Skill
                    </button>
                )}
            </div>
        </div>
        <div className="right-column">
            {/*Name Section*/}
            <div className="section">
                <h3>Full Name</h3>
                <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {/*Education Section*/}
            <EducationList education={education} setEducation={setEducation} />
            {/* Work Experience Section */}
            <ExperienceList experience={experience} setExperience={setExperience} />
            {/* Awards Section */}
            <div className="section">
            <h3>Awards</h3>
            {awards.map((award, index) => (
                <input
                key={index}
                type="text"
                placeholder={`Award ${index + 1}`}
                value={award}
                onChange={(e) => {
                    const newAwards = [...awards];
                    newAwards[index] = e.target.value;
                    setAwards(newAwards);
                }}
                />
            ))}
            {awards.length < 5 && (
                <button
                type="button"
                onClick={() => setAwards([...awards, ''])}
                >
                + Add Award
                </button>
            )}
            </div>
        </div>
    </form>
 );
}



