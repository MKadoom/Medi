import React, { useState } from 'react';
import '../assets/css/styles.css';

export default function Diagnosis() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    // Add analysis logic here
    setResult({
      condition: 'Sample Condition',
      confidence: '85%',
      recommendation: 'Consult a healthcare professional'
    });
  };

  return (
    <div className="diagnosis-container">
      <h2>Health Diagnosis</h2>
      <div className="input-section">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
        />
        <button onClick={handleAnalyze} className="analyze-btn">
          Analyze Symptoms
        </button>
      </div>
      
      {result && (
        <div className="result-section">
          <h3>Analysis Result</h3>
          <div className="result-card">
            <p><strong>Condition:</strong> {result.condition}</p>
            <p><strong>Confidence:</strong> {result.confidence}</p>
            <p><strong>Recommendation:</strong> {result.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
