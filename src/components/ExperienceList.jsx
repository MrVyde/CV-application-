function ExperienceList({ experience, setExperience }) {
  const handleChange = (index, value) => {
    const updated = [...experience];
    updated[index] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([...experience, '']);
  };

  return (
    <div className="section">
      <h3>Work Experience</h3>
      {experience.map((job, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Job/Role ${index + 1}`}
          value={job}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
      {experience.length < 5 && (
        <button type="button" onClick={addExperience}>
          + Add Experience
        </button>
      )}
    </div>
  );
}

export default ExperienceList;