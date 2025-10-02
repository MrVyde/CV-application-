import { useState, useEffect } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(null);

  // Load saved data on first render
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      setCvData(JSON.parse(savedData));
    }
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    if (cvData) {
      localStorage.setItem('cvData', JSON.stringify(cvData));
    }
  }, [cvData]);

  return (
    <div className="App">
      <Form onSubmit={setCvData} />
      {cvData && <Resume cvData={cvData} />}
      <button onClick={() => window.print()}>Print CV</button>
      <button onClick={() => {
      localStorage.removeItem('cvData');
      setCvData(null);
    }}>
      Clear CV
    </button>
    </div>
  );
}

export default App;