function EducationList({ education, setEducation }) {
  const handleChange = (index, value) => {
    const updated = [...education];
    updated[index] = value;
    setEducation(updated);
  };

  const addSchool = () => {
    setEducation([...education, '']);
  };

  return (
    <div className="section">
      <h3>Education</h3>
      {education.map((school, index) => (
        <input
          key={index}
          type="text"
          placeholder={`School/University ${index + 1}`}
          value={school}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
      {education.length < 5 && (
        <button type="button" onClick={addSchool}>
          + Add School
        </button>
      )}
    </div>
  );
}

export default EducationList;